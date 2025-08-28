const Product_finishes = require("../models/Product_finishes.model");
const ProductFinishType = require("../models/Product_finish_type.model"); // Import the associated model
const { Op } = require("sequelize");

class ProductFinishesController {
  /**
   * Fetches a paginated, filterable, and sortable list of product finishes.
   */
  async getProductFinishes(req, res) {
    try {
      const { page, limit, status, title, finishes_type_id, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};

      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (title) {
        where.title = {
          [Op.like]: `%${title}%`,
        };
      }
      
      if (finishes_type_id) {
        where.finishes_type_id = finishes_type_id;
      }

      if (sort) {
        let sortOptions = ["id", "title", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await Product_finishes.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
        include: [{ model: ProductFinishType }], // Include the associated model
      });

      const productFinishes = result.rows;

      if (productFinishes.length === 0) {
        return res
          .status(404)
          .json({ message: "No Product Finishes found", status: false });
      }

      return res.status(200).json({
        data: productFinishes,
        message: "Product Finishes fetched successfully",
        status: true,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Fetches a single product finish.
   */
  async getProductFinish(req, res) {
    try {
      const { id } = req.params;
      const productFinish = await Product_finishes.findByPk(id, {
        include: [{ model: ProductFinishType }]
      });

      if (!productFinish) {
        return res
          .status(404)
          .json({ message: "Product Finish not found", status: false });
      }

      return res.status(200).json({
        data: productFinish,
        message: "Product Finish fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new product finish record.
   */
  async createProductFinishes(req, res) {
    try {
      let finishData = { ...req.validated };
      
      if (req.file) {
        finishData.image = req.file.path.replace(/\\/g, '/');
      }

      const productFinish = await Product_finishes.create(finishData);

      if (!productFinish) {
        return res
          .status(400)
          .json({ message: "Product Finish not created", status: false });
      }

      return res
        .status(201)
        .json({ data: productFinish, message: "Product Finish created successfully", status: true });
    } catch (err) {
      if (req.file) {
        require('fs').unlinkSync(req.file.path);
      }

      console.log(err)
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing product finish.
   */
  async updateProductFinishes(req, res) {
    try {
      const { id } = req.params;
      const productFinish = await Product_finishes.findByPk(id);

      if (!productFinish) {
        if (req.file) {
          require('fs').unlinkSync(req.file.path);
        }
        return res
          .status(404)
          .json({ status: false, message: "Product Finish not found" });
      }

      let updateData = { ...req.validated };
      
      if (req.file) {
        // Delete old image
        if (productFinish.image && require('fs').existsSync(productFinish.image)) {
          require('fs').unlinkSync(productFinish.image);
        }
        updateData.image = req.file.path.replace(/\\/g, '/');
      }

      const [updated] = await Product_finishes.update(
        updateData,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Product Finish update failed" });
      }

      const updatedProductFinish = await Product_finishes.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product Finish updated successfully",
        data: updatedProductFinish,
      });
    } catch (err) {
      if (req.file) {
        require('fs').unlinkSync(req.file.path);
      }
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a product finish by updating its status to 2.
   */
  async deleteProductFinishes(req, res) {
    try {
      const { id } = req.params;
      const productFinish = await Product_finishes.findByPk(id);

      if (!productFinish) {
        return res
          .status(404)
          .json({ status: false, message: "Product Finish not found" });
      }

      await productFinish.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Product Finish deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a product finish's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const productFinish = await Product_finishes.findByPk(id);

      if (!productFinish) {
        return res.status(404).json({ status: false, message: "Product Finish not found" });
      }

      const newStatus = productFinish.status === 1 ? 0 : 1;
      await productFinish.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Product Finish status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ProductFinishesController();