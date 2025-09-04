const ProductCollection = require("../../models/ProductCollection.model");
const Product = require("../../models/Product.model");
const ProductMedia = require("../../models/ProductMedia");

class ProductCollectionWebController {
  async getCollections(req, res) {
    try {
      const collections = await ProductCollection.findAll({
        where: { status: 1 },
        include: [
          {
            model: Product,
            as: 'products',
            where: { status: 1 },
            required: false,
            limit: 4,
            include: [
              {
                model: ProductMedia,
                as: 'productMedia',
                where: { status: 1 },
                required: false
              }
            ]
          }
        ],
        order: [['created_on', 'DESC']]
      });

      return res.status(200).json({
        data: collections,
        message: "Collections fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: err.message 
      });
    }
  }

  async getCollection(req, res) {
    try {
      const { id } = req.params;
      const collection = await ProductCollection.findByPk(id, {
        include: [
          {
            model: Product,
            as: 'products',
            where: { status: 1 },
            required: false,
            limit:10,
            include: [
              {
                model: ProductMedia,
                as: 'productMedia',
                where: { status: 1 },
                required: false
              }
            ]
          }
        ]
      });

      if (!collection) {
        return res.status(404).json({ 
          message: "Collection not found", 
          status: false 
        });
      }

      return res.status(200).json({
        data: collection,
        message: "Collection fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: err.message 
      });
    }
  }
}

module.exports = new ProductCollectionWebController();