const ProductMedia = require("../../models/ProductMedia");
const Product = require("../../models/Product.model");
const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');

class ProductMediaController {
  async getProductMediaList(req, res) {
    try {
      const { page, limit, status, product_id, type, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};

      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (product_id) {
        where.product_id = product_id;
      }

      if (type) {
        where.type = type;
      }

      if (sort) {
        let sortOptions = ["id", "product_id", "type", "order", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await ProductMedia.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
        include: [{ model: Product, as: 'product' }],
      });

      const productMedia = result.rows;

      if (productMedia.length === 0) {
        return res.status(404).json({ status: false, message: "No Product Media found" });
      }

      return res.status(200).json({
        status: true,
        message: "Product Media fetched successfully",
        data: productMedia,
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async getProductMediaByProductId(req, res) {
    try {
      const { product_id } = req.params;
      const productMedia = await ProductMedia.findAll({
        where: { product_id }
      });

      if (productMedia.length === 0) {
        return res.status(404).json({ status: false, message: "No Product Media found for this product" });
      }

      return res.status(200).json({
        status: true,
        message: "Product Media fetched successfully",
        data: productMedia,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ status: false, message: err.message });
    }
  }
  async getProductMediaById(req, res) {
    try {
      const { id } = req.params;
      const productMedia = await ProductMedia.findOne({
        where: { id }
      });

      if (!productMedia) {
        return res.status(404).json({ status: false, message: "No Product Media found for this product" });
      }

      return res.status(200).json({
        status: true,
        message: "Product Media fetched successfully",
        data: productMedia,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async createProductMedia(req, res) {
    try {
      // Check if product exists
      const product = await Product.findByPk(req.validated.product_id);
      if (!product) {
        // Delete uploaded file if product doesn't exist
        return res.status(404).json({ status: false, message: "Product not found" });
      }

      
      const productMedia = await ProductMedia.create({
        ...req.validated,
        type: req.file?.mimetype.startsWith('image/') ? 'image' : 'video',
        file: req.file?.key,
      });

      return res.status(201).json({
        status: true,
        message: "Product Media created successfully",
        data: productMedia,
      });
    } catch (err) {
      console.log(err)
      // Delete uploaded file on error
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async updateProductMedia(req, res) {
    try {
      const { id } = req.params;
      const productMedia = await ProductMedia.findByPk(id);

      if (!productMedia) {
        // Delete uploaded file if media doesn't exist
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(404).json({ status: false, message: "Product Media not found" });
      }

      let updateData = { ...req.validated };

      // If new file is uploaded, update file and type
      if (req.file) {
        // Delete old file
        if (productMedia.file && fs.existsSync(productMedia.file)) {
          fs.unlinkSync(productMedia.file);
        }
        
        updateData.file = req.file.key;
        updateData.type = req.file.mimetype.startsWith('image/') ? 'image' : 'video';
      }

      const [updated] = await ProductMedia.update(updateData, { where: { id } });

      if (!updated) {
        return res.status(400).json({ status: false, message: "Product Media update failed" });
      }

      const updatedProductMedia = await ProductMedia.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product Media updated successfully",
        data: updatedProductMedia,
      });
    } catch (err) {
      // Delete uploaded file on error
      if (req.file) {
        fs.unlinkSync(req.file.key);
      }
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async deleteProductMedia(req, res) {
    try {
      const { id } = req.params;
      const productMedia = await ProductMedia.findByPk(id);

      if (!productMedia) {
        return res.status(404).json({ status: false, message: "Product Media not found" });
      }

      // Delete file from filesystem
      if (productMedia.file && fs.existsSync(productMedia.file)) {
        fs.unlinkSync(productMedia.file);
      }

      await productMedia.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res.status(200).json({ status: true, message: "Product Media deleted successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const productMedia = await ProductMedia.findByPk(id);

      if (!productMedia) {
        return res.status(404).json({ status: false, message: "Product Media not found" });
      }

      const newStatus = productMedia.status === 1 ? 0 : 1;
      await productMedia.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Product Media status updated successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new ProductMediaController();