const Product = require("../../models/Product.model");
const ProductMedia = require("../../models/ProductMedia");
const ProductPrice = require("../../models/ProductPrice.model");
const ProductCollection = require("../../models/ProductCollection.model");

class ProductWebController {
  async getProducts(req, res) {
    try {
      const products = await Product.findAll({
        where: { status: 1 },
        include: [
          {
            model: ProductMedia,
            as: 'productMedia',
            where: { status: 1 },
            required: false
          },
          {
            model: ProductPrice,
            as: 'prices',
            required: false
          },
          {
            model: ProductCollection,
            as: 'collection',
            where: { status: 1 },
            required: false
          }
        ],
        order: [['created_on', 'DESC']]
      });

      return res.status(200).json({
        data: products,
        message: "Products fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: "Something went wrong" 
      });
    }
  }

  async getProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: [
          {
            model: ProductMedia,
            as: 'productMedia',
            where: { status: 1 },
            required: false
          },
          {
            model: ProductPrice,
            as: 'prices',
            required: false
          },
          {
            model: ProductCollection,
            as: 'collection',
            where: { status: 1 },
            required: false
          }
        ]
      });

      if (!product) {
        return res.status(404).json({ 
          message: "Product not found", 
          status: false 
        });
      }

      return res.status(200).json({
        data: product,
        message: "Product fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: "Something went wrong" 
      });
    }
  }
}

module.exports = new ProductWebController();