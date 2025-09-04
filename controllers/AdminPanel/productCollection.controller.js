const Product_collection = require("../../models/ProductCollection.model");
const { Op } = require("sequelize");

class ProductCollectionController {
  /**
   * Fetches a paginated, filterable, and sortable list of product collections.
   */
  async getProductCollections(req, res) {
    try {
      const { page, limit, status, title, sort, order } = req.query;
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

      if (sort) {
        let sortOptions = ["id", "title", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await Product_collection.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const productCollections = result.rows;

      if (productCollections.length === 0) {
        return res
          .status(404)
          .json({ status: false , message: "No Product Collections found"});
      }

      return res.status(200).json({
        status: true,
        message: "Product Collections fetched successfully",
        data: productCollections,
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Fetches a single product collection.
   */
  async getProductCollection(req, res) {
    try {
      const { id } = req.params;
      const productCollection = await Product_collection.findByPk(id);

      if (!productCollection) {
        return res
          .status(404)
          .json({ status: false, message: "Product Collection not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Product Collection fetched successfully",
        data: productCollection,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Creates a new product collection record.
   */
  async createProductCollection(req, res) {
    try {
      const productCollection = await Product_collection.create(req.validated);

      if (!productCollection) {
        return res
          .status(400)
          .json({ status: false, message: "Product Collection not created" });
      }

      return res
        .status(201)
        .json({ status: true,  message: "Product Collection created successfully", data: productCollection });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Updates an existing product collection.
   */
  async updateProductCollection(req, res) {
    try {
      const { id } = req.params;
      const productCollection = await Product_collection.findByPk(id);

      if (!productCollection) {
        return res
          .status(404)
          .json({ status: false, message: "Product Collection not found" });
      }

      const [updated] = await Product_collection.update(
        req.validated,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Product Collection update failed" });
      }

      const updatedProductCollection = await Product_collection.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product Collection updated successfully",
        data: updatedProductCollection,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Soft deletes a product collection by updating its status to 2.
   */
  async deleteProductCollection(req, res) {
    try {
      const { id } = req.params;
      const productCollection = await Product_collection.findByPk(id);

      if (!productCollection) {
        return res
          .status(404)
          .json({ status: false, message: "Product Collection not found" });
      }

      await productCollection.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Product Collection deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles a product collection's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const productCollection = await Product_collection.findByPk(id);

      if (!productCollection) {
        return res.status(404).json({ status: false, message: "Product Collection not found" });
      }

      const newStatus = productCollection.status === 1 ? 0 : 1;
      await productCollection.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Product Collection status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async getDropDownForProduct(req,res){
    try{

      const productCollections = await Product_collection.findAll({
        where: {
          status: 1
        },
        attributes: ['id', 'title']
      });

      if(!productCollections){
        return res.status(404).json({ status: false, message: "Product Collections not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Product Collections fetched successfully",
        data: productCollections
      });

    }catch(err){
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new ProductCollectionController();