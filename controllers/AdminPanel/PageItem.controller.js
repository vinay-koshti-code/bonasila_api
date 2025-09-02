const PageListItems = require("../../models/PageItems.model");
const { Op } = require("sequelize");

class PageListItemsController {
  /**
   * Fetches a paginated, filterable, and sortable list of page list items.
   */
  async getPageListItems(req, res) {
    try {
      const { page, limit, page_type, list_type, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};
      let scope = "defaultScope";

      if (!page_type || !list_type) {
        return res
          .status(400)
          .json({ message: "page_type and list_type are required query parameters", status: false });
      }

      where.page_type = page_type;
      where.list_type = list_type;

      if (status == 0) {
        scope = "withInactive";
        where.status = 0;
      } else if (status == 2) {
        scope = "unscoped";
        where.status = 2;
      }

      if (sort) {
        let sortOptions = ["id", "order_no", "title", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await PageListItems.scope(scope).findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const items = result.rows;

      if (items.length === 0) {
        return res
          .status(404)
          .json({ message: "No items found for this list type on this page", status: false });
      }

      return res.status(200).json({
        data: items,
        message: "Page list items fetched successfully",
        status: true,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Fetches a single page list item by ID.
   */
  async getPageListItem(req, res) {
    try {
      const { id } = req.params;
      const item = await PageListItems.findByPk(id);

      if (!item) {
        return res
          .status(404)
          .json({ message: "Page list item not found", status: false });
      }

      return res.status(200).json({
        data: item,
        message: "Page list item fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new page list item.
   */
  async createPageListItem(req, res) {
    try {
      const itemData = { ...req.validated };
      
// Handle file uploads
      if (req.files) {
        if (req.files.file) {
          itemData.file = req.files.file[0].key;
        }
        if (req.files.pdf) {
          itemData.pdf = req.files.pdf[0].key;
        }
      }
      
      const item = await PageListItems.create(itemData);

      if (!item) {
        return res
          .status(400)
          .json({ message: "Page list item not created", status: false });
      }

      return res
        .status(201)
        .json({ data: item, message: "Page list item created successfully", status: true });
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing page list item.
   */
  async updatePageListItem(req, res) {
    try {
      const { id } = req.params;
      const item = await PageListItems.findByPk(id);

      if (!item) {
        return res
          .status(404)
          .json({ status: false, message: "Page list item not found" });
      }

      const updateData = { ...req.validated };
      
// Handle file uploads
      if (req.files) {
        if (req.files.file) {
          itemData.file = req.files.file[0].key;
        }
        if (req.files.pdf) {
          itemData.pdf = req.files.pdf[0].key;
        }
      }

      const [updated] = await PageListItems.update(
        updateData,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Page list item update failed" });
      }

      const updatedItem = await PageListItems.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Page list item updated successfully",
        data: updatedItem,
      });
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a page list item by updating its status to 2.
   */
  async deletePageListItem(req, res) {
    try {
      const { id } = req.params;
      const item = await PageListItems.findByPk(id);

      if (!item) {
        return res
          .status(404)
          .json({ status: false, message: "Page list item not found" });
      }

      await item.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Page list item deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a page list item's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const item = await PageListItems.scope("unscoped").findByPk(id);

      if (!item) {
        return res.status(404).json({ status: false, message: "Page list item not found" });
      }

      const newStatus = item.status === 1 ? 0 : 1;
      await item.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Page list item status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new PageListItemsController();