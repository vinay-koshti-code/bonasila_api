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
        return res.status(404).json({ message: "No Product Media found", status: false });
      }

      return res.status(200).json({
        data: productMedia,
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
        message: "Product Media fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async getProductMedia(req, res) {
    try {
      const { product_id } = req.params;
      const productMedia = await ProductMedia.findAll({
        where: { product_id }
      });

      if (productMedia.length === 0) {
        return res.status(404).json({ message: "No Product Media found for this product", status: false });
      }

      return res.status(200).json({
        data: productMedia,
        message: "Product Media fetched successfully",
        status: true,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async createProductMedia(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "File is required", status: false });
      }

      // Check if product exists
      const product = await Product.findByPk(req.validated.product_id);
      if (!product) {
        // Delete uploaded file if product doesn't exist
        fs.unlinkSync(req.file.path);
        return res.status(404).json({ message: "Product not found", status: false });
      }

      // Determine file type
      const fileType = req.file.mimetype.startsWith('image/') ? 'image' : 'video';
      
      const productMedia = await ProductMedia.create({
        ...req.validated,
        type: fileType,
        path: req.file.key, // Normalize path separators
      });

      return res.status(201).json({
        data: productMedia,
        message: "Product Media created successfully",
        status: true
      });
    } catch (err) {
      // Delete uploaded file on error
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(500).json({ status: false, message: "Something went wrong" });
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

      // If new file is uploaded, update path and type
      if (req.file) {
        // Delete old file
        if (fs.existsSync(productMedia.path)) {
          fs.unlinkSync(productMedia.path);
        }
        
        updateData.path = req.file.key;
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
        fs.unlinkSync(req.file.path);
      }
      return res.status(500).json({ status: false, message: "Something went wrong" });
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
      if (fs.existsSync(productMedia.path)) {
        fs.unlinkSync(productMedia.path);
      }

      await productMedia.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res.status(200).json({ status: true, message: "Product Media deleted successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
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
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ProductMediaController();