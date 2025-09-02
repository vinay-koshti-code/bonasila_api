const Product = require("../../models/Product.model");
const { Op } = require("sequelize");

class ProductController {
  /**
   * Fetches a paginated, filterable, and sortable list of products.
   */
  async getProducts(req, res) {
    try {
        console.log("Get PRoducts Admin")
      const { page, limit, status, name, sort, order } = req.query;
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

      if (sort) {
        let sortOptions = ["id", "name", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await Product.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const products = result.rows;

      if (products.length === 0) {
        return res
          .status(404)
          .json({ message: "No Products found", status: false });
      }

      return res.status(200).json({
        status: true,
        message: "Products fetched successfully",
        data: products,
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Fetches a single product.
   */
  async getProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: [
          {
            model: require('../../models/ProductFinishes.model'),
            as: 'finishes',
            through: { attributes: [] },
            where: { status: 1 },
            required: false
          }
        ]
      });

      if (!product) {
        return res
          .status(404)
          .json({ message: "Product not found", status: false });
      }

      return res.status(200).json({
        data: product,
        message: "Product fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new product record.
   */
  async createProduct(req, res) {
    try {
      let productData = { ...req.validated };
      
      // Handle uploaded files
      if (req.files) {
        if (req.files.cover_image) {
          productData.cover_image = req.files.cover_image[0].key;
        }
        if (req.files.size_image) {
          productData.size_image = req.files.size_image[0].key;
        }
        if (req.files.popup_image) {
          productData.popup_image = req.files.popup_image[0].key;
        }
        if (req.files.menu_image) {
          productData.menu_image = req.files.menu_image[0].key;
        }
      }
      
      const product = await Product.create(productData);

      if (!product) {
        return res
          .status(400)
          .json({ message: "Product not created", status: false });
      }

      return res
        .status(201)
        .json({ data: product, message: "Product created successfully", status: true });
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing product.
   */
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        return res
          .status(404)
          .json({ status: false, message: "Product not found" });
      }

      let updateData = { ...req.validated };
      
      // Handle uploaded files
      if (req.files) {
        if (req.files.cover_image) {
          updateData.cover_image = req.files.cover_image[0].key;
        }
        if (req.files.size_image) {
          updateData.size_image = req.files.size_image[0].key;
        }
        if (req.files.popup_image) {
          updateData.popup_image = req.files.popup_image[0].key;
        }
        if (req.files.menu_image) {
          updateData.menu_image = req.files.menu_image[0].key;
        }
      }

      const [updated] = await Product.update(
        updateData,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Product update failed" });
      }

      const updatedProduct = await Product.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a product by updating its status to 2.
   */
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        return res
          .status(404)
          .json({ status: false, message: "Product not found" });
      }

      await product.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Product deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a product's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ status: false, message: "Product not found" });
      }

      const newStatus = product.status === 1 ? 0 : 1;
      await product.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Product status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ProductController();