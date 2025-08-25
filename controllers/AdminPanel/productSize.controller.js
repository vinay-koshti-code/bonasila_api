const Product_size = require("../../models/productSize.model");
const { Op } = require("sequelize");

class ProductSizeController {
  /**
   * Fetches a paginated, filterable, and sortable list of product sizes.
   */
  async getProductSizes(req, res) {
    try {
        console.log("get Product Sizes")
      const { page, limit, status, name, alphabet, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};

      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (name) {
        where.name = {
          [Op.like]: `%${name}%`,
        };
      }
      
      if (alphabet) {
        where.alphabet = {
          [Op.like]: `%${alphabet}%`,
        };
      }

      if (sort) {
        let sortOptions = ["id", "name", "alphabet", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await Product_size.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const productSizes = result.rows;

      if (productSizes.length === 0) {
        return res
          .status(404)
          .json({ message: "No Product Sizes found", status: false });
      }

      return res.status(200).json({
        data: productSizes,
        message: "Product Sizes fetched successfully",
        status: true,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Fetches a single product size.
   */
  async getProductSize(req, res) {
    try {
      const { id } = req.params;
      const productSize = await Product_size.findByPk(id);

      if (!productSize) {
        return res
          .status(404)
          .json({ message: "Product Size not found", status: false });
      }

      return res.status(200).json({
        data: productSize,
        message: "Product Size fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new product size record.
   */
  async createProductSize(req, res) {
    try {
      const productSize = await Product_size.create(req.validated);

      if (!productSize) {
        return res
          .status(400)
          .json({ message: "Product Size not created", status: false });
      }

      return res
        .status(201)
        .json({ data: productSize, message: "Product Size created successfully", status: true });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing product size.
   */
  async updateProductSize(req, res) {
    try {
      const { id } = req.params;
      const productSize = await Product_size.findByPk(id);

      if (!productSize) {
        return res
          .status(404)
          .json({ status: false, message: "Product Size not found" });
      }

      const [updated] = await Product_size.update(
        req.validated,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Product Size update failed" });
      }

      const updatedProductSize = await Product_size.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product Size updated successfully",
        data: updatedProductSize,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a product size by updating its status to 2.
   */
  async deleteProductSize(req, res) {
    try {
      const { id } = req.params;
      const productSize = await Product_size.findByPk(id);

      if (!productSize) {
        return res
          .status(404)
          .json({ status: false, message: "Product Size not found" });
      }

      await productSize.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Product Size deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a product size's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const productSize = await Product_size.findByPk(id);

      if (!productSize) {
        return res.status(404).json({ status: false, message: "Product Size not found" });
      }

      const newStatus = productSize.status === 1 ? 0 : 1;
      await productSize.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Product Size status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ProductSizeController();