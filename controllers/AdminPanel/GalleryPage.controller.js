const GalleryPage = require("../../models/GalleryPage.model");
const { Op } = require("sequelize");

class GalleryPageController {
  /**
   * Fetches a paginated, filterable, and sortable list of gallery items.
   */
  async getGalleryPages(req, res) {
    try {
      const { page, limit, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};
      
      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (sort) {
        let sortOptions = ["id", "created_on", "status"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await GalleryPage.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const galleryPages = result.rows;

      if (galleryPages.length === 0) {
        return res
          .status(404)
          .json({ status: false, message: "No Gallery items found" });
      }

      return res.status(200).json({
        status: true,
        message: "Gallery items fetched successfully",
        data: galleryPages,
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
      });
    } catch (err) {
      console.log(e)
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Fetches a single gallery item.
   */
  async getGalleryPage(req, res) {
    try {
      const { id } = req.params;
      const galleryPage = await GalleryPage.findByPk(id);

      if (!galleryPage) {
        return res
          .status(404)
          .json({ status: false, message: "Gallery item not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Gallery item fetched successfully",
        data: galleryPage,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Creates a new gallery item record.
   */
  async createGalleryPage(req, res) {
    try {
      const data = { ...req.validated };
      
      // Handle uploaded files
      if (req.files) {
        if (req.files.video) {
          data.video = req.files.video[0].key;
        }
        if (req.files.image) {
          data.image = req.files.image[0].key;
        }
      }

      const galleryPage = await GalleryPage.create(data);

      if (!galleryPage) {
        return res
          .status(400)
          .json({ status: false, message: "Gallery item not created" });
      }

      return res
        .status(201)
        .json({  status: true, message: "Gallery item created successfully", data: galleryPage });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Updates an existing gallery item.
   */
  async updateGalleryPage(req, res) {
    try {
      const { id } = req.params;
      const galleryPage = await GalleryPage.findByPk(id);

      if (!galleryPage) {
        return res
          .status(404)
          .json({ status: false, message: "Gallery item not found" });
      }

      const data = { ...req.validated };
      
      // Handle uploaded files
      if (req.files) {
        if (req.files.video) {
          data.video = req.files.video[0].key;
        }
        if (req.files.image) {
          data.image = req.files.image[0].key;
        }
      }

      const [updated] = await GalleryPage.update(
        data,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Gallery item update failed" });
      }

      const updatedGalleryPage = await GalleryPage.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Gallery item updated successfully",
        data: updatedGalleryPage,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Soft deletes a gallery item by updating its status to 2.
   */
  async deleteGalleryPage(req, res) {
    try {
      const { id } = req.params;
      const galleryPage = await GalleryPage.findByPk(id);

      if (!galleryPage) {
        return res
          .status(404)
          .json({ status: false, message: "Gallery item not found" });
      }

      await galleryPage.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Gallery item deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles a gallery item's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const galleryPage = await GalleryPage.findByPk(id);

      if (!galleryPage) {
        return res.status(404).json({ status: false, message: "Gallery item not found" });
      }

      const newStatus = galleryPage.status === 1 ? 0 : 1;
      await galleryPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Gallery item status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }
}

module.exports = new GalleryPageController();