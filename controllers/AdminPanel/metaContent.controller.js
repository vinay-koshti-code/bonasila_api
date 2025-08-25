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
          .json({ message: "No Meta Content found", status: false });
      }

      return res.status(200).json({
        data: metaContents,
        message: "Meta Content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
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
          .json({ message: "Meta Content not found", status: false });
      }

      return res.status(200).json({
        data: metaContent,
        message: "Meta Content fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
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
          .json({ message: "Meta Content not found", status: false });
      }

      return res.status(200).json({
        data: metaContent,
        message: "Meta Content fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new meta content record.
   */
  async createMetaContent(req, res) {
    try {
      const metaContent = await MetaContent.create(req.validated);

      if (!metaContent) {
        return res
          .status(400)
          .json({ message: "Meta Content not created", status: false });
      }

      return res
        .status(201)
        .json({ data: metaContent, message: "Meta Content created successfully", status: true });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
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
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
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
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new MetaContentController();