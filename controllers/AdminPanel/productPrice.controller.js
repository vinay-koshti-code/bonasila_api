const Product_Price = require("../../models/ProductPrice.model");
const Product = require("../../models/Product.model"); // Import the Product model
const { Op } = require("sequelize");

class ProductPriceController {
  /**
   * Fetches a paginated, filterable, and sortable list of product prices.
   * Can be filtered by a specific product_id.
   */
//   async getProductPrices(req, res) {
//     try {
//       const { page, limit, status, name, product_id, sort, order } = req.query;
//       const pageInt = parseInt(page) || 1;
//       const limitInt = parseInt(limit) || 10;
//       const offset = (pageInt - 1) * limitInt;
//       let where = {};
//       let options = {};

//       if (status == 0 || status == 1) {
//         where.status = status;
//       }
      
//       if (product_id) {
//         where.product_id = product_id;
//       }

//       if (name) {
//         where.name = {
//           [Op.like]: `%${name}%`,
//         };
//       }

//       if (sort) {
//         let sortOptions = ["id", "name", "price_in_inr", "price_in_usd", "status", "created_on"];
//         if (sortOptions.includes(sort)) {
//           options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
//         }
//       }

//       const result = await Product_Price.findAndCountAll({
//         where,
//         offset,
//         limit: limitInt,
//         ...options,
//         include: [{ model: Product }], // Include the associated Product data
//       });

//       const productPrices = result.rows;

//       if (productPrices.length === 0) {
//         return res
//           .status(404)
//           .json({ message: "No Product Prices found", status: false });
//       }

//       return res.status(200).json({
//         data: productPrices,
//         message: "Product Prices fetched successfully",
//         status: true,
//       });
//     } catch (e) {
//       return res
//         .status(500)
//         .json({ status: false, message: "Something went wrong" });
//     }
//   }

  /**
   * Fetches product prices for a specific product.
   */
  async getProductPrice(req, res) {
    try {
      const { id } = req.params; // product_id
      
      // Check if product exists
      const product = await Product.findByPk(id);
      if (!product) {
        return res
          .status(404)
          .json({ message: "Product not found", status: false });
      }

      // Fetch product prices for this product
      const productPrices = await Product_Price.findAll({
        where: { product_id: id }
      });

      if (productPrices.length === 0) {
        return res
          .status(404)
          .json({ message: "No Product Prices found for this product", status: false });
      }

      return res.status(200).json({
        data: productPrices,
        message: "Product Prices fetched successfully",
        status: true,
      });
    } catch (err) {
        console.log(err)
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new product price record.
   */
  async createProductPrice(req, res) {
    try {
      const productPrice = await Product_Price.create(req.validated);

      if (!productPrice) {
        return res
          .status(400)
          .json({ message: "Product Price not created", status: false });
      }

      return res
        .status(201)
        .json({ data: productPrice, message: "Product Price created successfully", status: true });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing product price.
   */
  async updateProductPrice(req, res) {
    try {
      const { id } = req.params;
      const productPrice = await Product_Price.findByPk(id);

      if (!productPrice) {
        return res
          .status(404)
          .json({ status: false, message: "Product Price not found" });
      }

      const [updated] = await Product_Price.update(
        req.validated,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Product Price update failed" });
      }

      const updatedProductPrice = await Product_Price.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product Price updated successfully",
        data: updatedProductPrice,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a product price by updating its status to 2.
   */
  async deleteProductPrice(req, res) {
    try {
      const { id } = req.params;
      const productPrice = await Product_Price.findByPk(id);

      if (!productPrice) {
        return res
          .status(404)
          .json({ status: false, message: "Product Price not found" });
      }

      await productPrice.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Product Price deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a product price's status between active (1) and inactive (0).
   */
//   async updateStatus(req, res) {
//     try {
//       const { id } = req.params;
//       const productPrice = await Product_Price.findByPk(id);

//       if (!productPrice) {
//         return res.status(404).json({ status: false, message: "Product Price not found" });
//       }

//       const newStatus = productPrice.status === 1 ? 0 : 1;
//       await productPrice.update({ status: newStatus });

//       return res.status(200).json({ status: true, message: "Product Price status updated successfully" });

//     } catch (err) {
//       return res.status(500).json({ status: false, message: "Something went wrong" });
//     }
//   }
}

module.exports = new ProductPriceController();