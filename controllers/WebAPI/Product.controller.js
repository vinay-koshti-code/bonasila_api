const Product = require("../../models/Product.model");
const ProductMedia = require("../../models/ProductMedia");
const ProductPrice = require("../../models/ProductPrice.model");
const ProductCollection = require("../../models/ProductCollection.model");
const MetaContent = require("../../models/MetaContent.model");

class ProductWebController {
  async getProducts(req, res) {
    try {
      const metaContent = await MetaContent.findOne({
        where: { page_slug: 'products' }
      });

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
          },
          {
            model: require('../../models/ProductFinishes.model'),
            as: 'finishes',
            through: { attributes: [] },
            where: { status: 1 },
            required: false
          }
        ],
        order: [['created_on', 'DESC']]
      });

      return res.status(200).json({
        data: {
          products: products,
          meta_content: metaContent
        },
        message: "Products fetched successfully",
        status: true,
      });
    } catch (error) {
      console.log(error)
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
          },
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
        return res.status(404).json({ 
          message: "Product not found", 
          status: false 
        });
      }

      const metaContent = await MetaContent.findOne({
        where: { page_slug: `product-${id}` }
      });

      return res.status(200).json({
        data: {
          product: product,
          meta_content: metaContent
        },
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