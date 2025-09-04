const MetaContent = require("../../models/MetaContent.model");
const { Op } = require("sequelize");

class MetaContentController {
  /**
   * Fetches a paginated, filterable, and sortable list of meta content records.
   */
  async getMetaContents(req, res) {
    try {
      const { page, limit, status, page_name, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};
      let scope = "defaultScope";

      if (status == 0) {
        scope = "withInactive";
        where.status = 0;
      }
      
      if (page_name) {
        where.page_name = {
          [Op.like]: `%${page_name}%`,
        };
      }

      if (sort) {
        let sortOptions = ["id", "page_slug", "page_name", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await MetaContent.scope(scope).findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const metaContents = result.rows;

      if (metaContents.length === 0) {
        return res
          .status(404)
          .json({ status: false, message: "No Meta Content found" });
      }

      return res.status(200).json({
        status: true,
        message: "Meta Content fetched successfully",
        data: metaContents,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Fetches a single meta content record by ID.
   */
  async getMetaContentById(req, res) {
    try {
      const { id } = req.params;
      const metaContent = await MetaContent.findByPk(id);

      if (!metaContent) {
        return res
          .status(404)
          .json({ status: false, message: "Meta Content not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Meta Content fetched successfully",
        data: metaContent,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Fetches a single meta content record by page slug.
   */
  async getMetaContentBySlug(req, res) {
    try {
      const { slug } = req.params;
      const metaContent = await MetaContent.scope("withInactive").findOne({
        where: { page_slug: slug },
      });

      if (!metaContent) {
        return res
          .status(404)
          .json({  status: false, message: "Meta Content not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Meta Content fetched successfully",
        data: metaContent,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Creates or updates meta content record based on page_slug uniqueness.
   */
  async createOrUpdateMetaContent(req, res) {
    try {
      const validatedData = req.validated;
      
      // Check if record exists for this page_slug
      let metaContent = await MetaContent.scope('unscoped').findOne({
        where: { page_slug: validatedData.page_slug }
      });

      if (metaContent) {
        // Update existing record
        await metaContent.update(validatedData);
        const updatedMetaContent = await MetaContent.findByPk(metaContent.id);
        return res.status(200).json({
          status: true,
          message: "Meta Content updated successfully",
          data: updatedMetaContent,
        });
      } else {
        // Create new record
        metaContent = await MetaContent.create(validatedData);
        return res.status(201).json({
          status: true,
          message: "Meta Content created successfully",
          data: metaContent,
        });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Updates an existing meta content record.
   */
  async updateMetaContent(req, res) {
    try {
      const { id } = req.params;
      const metaContent = await MetaContent.findByPk(id);

      if (!metaContent) {
        return res
          .status(404)
          .json({ status: false, message: "Meta Content not found" });
      }

      console.log(req.validated);
      const [updated] = await MetaContent.update(
        req.validated,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Meta Content update failed" });
      }

      const updatedMetaContent = await MetaContent.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Meta Content updated successfully",
        data: updatedMetaContent,
      });
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles a meta content record's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const metaContent = await MetaContent.scope("unscoped").findByPk(id);

      if (!metaContent) {
        return res.status(404).json({ status: false, message: "Meta Content not found" });
      }

      const newStatus = metaContent.status === 1 ? 0 : 1;
      await metaContent.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Meta Content status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async deleteMetaContent(req, res) {
    try {
      const { id } = req.params;
      const metaContent = await MetaContent.findByPk(id);

      if (!metaContent) {
        return res.status(404).json({ status: false, message: "Meta Content not found" });
      }

      await metaContent.update({status:2, deleted_on: new Date()});

      return res.status(200).json({ status: true, message: "Meta Content deleted successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new MetaContentController();