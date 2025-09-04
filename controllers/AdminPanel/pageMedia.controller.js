const PageMedia = require("../models/PageMedia.model");
const PageListItems = require("../models/PageListItems.model");
const { Op } = require("sequelize");

class PageMediaController {
  /**
   * Fetches a paginated, filterable, and sortable list of page media.
   */
  async getPageMedia(req, res) {
    try {
      const { page, limit, page_type, block_id, media_type, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};
      let scope = "defaultScope";

      if (!page_type) {
        return res
          .status(400)
          .json({  status: false, message: "page_type is a required query parameter" });
      }
      
      where.page_type = page_type;

      if (block_id) {
        where.block_id = block_id;
      }

      if (media_type) {
        where.media_type = media_type;
      }

      if (status == 0) {
        scope = "unscoped";
        where.status = 0;
      } else if (status == 2) {
        scope = "unscoped";
        where.status = 2;
      }

      if (sort) {
        let sortOptions = ["id", "order_no", "file_url", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await PageMedia.scope(scope).findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
        include: [{ model: PageListItems }],
      });

      const mediaItems = result.rows;

      if (mediaItems.length === 0) {
        return res
          .status(404)
          .json({  status: false, message: "No media found for this page/block" });
      }

      return res.status(200).json({
        status: true,
        message: "Page media fetched successfully",
        data: mediaItems,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Fetches a single page media item by ID.
   */
  async getPageMediaById(req, res) {
    try {
      const { id } = req.params;
      const mediaItem = await PageMedia.findByPk(id, {
        include: [{ model: PageListItems }]
      });

      if (!mediaItem) {
        return res
          .status(404)
          .json({ status: false, message: "Page media item not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Page media item fetched successfully",
        data: mediaItem,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Creates a new page media item.
   */
  async createPageMedia(req, res) {
    try {
      const mediaItem = await PageMedia.create(req.validated);

      if (!mediaItem) {
        return res
          .status(400)
          .json({ status: false, message: "Page media item not created" });
      }

      return res
        .status(201)
        .json({ status: true, message: "Page media item created successfully" , data: mediaItem});
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Updates an existing page media item.
   */
  async updatePageMedia(req, res) {
    try {
      const { id } = req.params;
      const mediaItem = await PageMedia.findByPk(id);

      if (!mediaItem) {
        return res
          .status(404)
          .json({ status: false, message: "Page media item not found" });
      }

      const [updated] = await PageMedia.update(
        req.validated,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Page media item update failed" });
      }

      const updatedMediaItem = await PageMedia.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Page media item updated successfully",
        data: updatedMediaItem,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Soft deletes a page media item by updating its status to 2.
   */
  async deletePageMedia(req, res) {
    try {
      const { id } = req.params;
      const mediaItem = await PageMedia.findByPk(id);

      if (!mediaItem) {
        return res
          .status(404)
          .json({ status: false, message: "Page media item not found" });
      }

      await mediaItem.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Page media item deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles a page media item's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const mediaItem = await PageMedia.scope("unscoped").findByPk(id);

      if (!mediaItem) {
        return res.status(404).json({ status: false, message: "Page media item not found" });
      }

      const newStatus = mediaItem.status === 1 ? 0 : 1;
      await mediaItem.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Page media item status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new PageMediaController();