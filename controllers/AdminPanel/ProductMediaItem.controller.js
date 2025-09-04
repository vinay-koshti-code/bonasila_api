const ProductMediaItem = require("../../models/ProductMediaItem.model");
const ProductMedia = require("../../models/ProductMedia");
const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');

class ProductMediaItemController {
  async getProductMediaItemList(req, res) {
    try {
      const { page, limit, status, media_id, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};

      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (media_id) {
        where.media_id = media_id;
      }

      if (sort) {
        let sortOptions = ["id", "media_id", "file_alt", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await ProductMediaItem.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
        include: [{ model: ProductMedia, as: 'product_media' }],
      });

      const productMediaItems = result.rows;

      if (productMediaItems.length === 0) {
        return res.status(404).json({ message: "No Product Media Items found", status: false });
      }

      return res.status(200).json({
        data: productMediaItems,
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
        message: "Product Media Items fetched successfully",
        status: true,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async getProductMediaItems(req, res) {
    try {
      const { media_id } = req.params;
      
      const productMedia = await ProductMedia.findByPk(media_id);
      if (!productMedia) {
        return res.status(404).json({ message: "Product Media not found", status: false });
      }

      const productMediaItems = await ProductMediaItem.findAll({
        where: { media_id }
      });

      return res.status(200).json({
        data: productMediaItems,
        message: "Product Media Items fetched successfully",
        status: true,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async createProductMediaItem(req, res) {
    try {
      const productMedia = await ProductMedia.findByPk(req.validated.media_id);
      if (!productMedia) {
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(404).json({ message: "Product Media not found", status: false });
      }

      const productMediaItem = await ProductMediaItem.create({
        ...req.validated,
        file: req.file?.key,
      });

      return res.status(201).json({
        data: productMediaItem,
        message: "Product Media Item created successfully",
        status: true
      });
    } catch (err) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async updateProductMediaItem(req, res) {
    try {
      const { id } = req.params;
      const productMediaItem = await ProductMediaItem.findByPk(id);

      if (!productMediaItem) {
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(404).json({ status: false, message: "Product Media Item not found" });
      }

      let updateData = { ...req.validated };
      if (req.file) {
        if (productMediaItem.file && fs.existsSync(productMediaItem.file)) {
          fs.unlinkSync(productMediaItem.file);
        }
        updateData.file = req.file.key;
      }

      const [updated] = await ProductMediaItem.update(updateData, { where: { id } });

      if (!updated) {
        return res.status(400).json({ status: false, message: "Product Media Item update failed" });
      }

      const updatedProductMediaItem = await ProductMediaItem.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product Media Item updated successfully",
        data: updatedProductMediaItem,
      });
    } catch (err) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async deleteProductMediaItem(req, res) {
    try {
      const { id } = req.params;
      const productMediaItem = await ProductMediaItem.findByPk(id);

      if (!productMediaItem) {
        return res.status(404).json({ status: false, message: "Product Media Item not found" });
      }

      if (productMediaItem.file && fs.existsSync(productMediaItem.file)) {
        fs.unlinkSync(productMediaItem.file);
      }

      await productMediaItem.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res.status(200).json({ status: true, message: "Product Media Item deleted successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const productMediaItem = await ProductMediaItem.findByPk(id);

      if (!productMediaItem) {
        return res.status(404).json({ status: false, message: "Product Media Item not found" });
      }

      const newStatus = productMediaItem.status === 1 ? 0 : 1;
      await productMediaItem.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Product Media Item status updated successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new ProductMediaItemController();