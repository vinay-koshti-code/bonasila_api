const Product_finish_type = require("../../models/ProductFinishes.model");
const { Op } = require("sequelize");

class ProductFinishTypeController {
  /**
   * Fetches a paginated, filterable, and sortable list of product finish types.
   */
  async getProductFinishTypes(req, res) {
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

      const result = await Product_finish_type.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const productFinishTypes = result.rows;

      if (productFinishTypes.length === 0) {
        return res
          .status(404)
          .json({ message: "No Product Finish Types found", status: false });
      }

      return res.status(200).json({
        data: productFinishTypes,
        message: "Product Finish Types fetched successfully",
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
        status: true,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Fetches a single product finish type.
   */
  async getProductFinishType(req, res) {
    try {
      const { id } = req.params;
      const productFinishType = await Product_finish_type.findByPk(id);

      if (!productFinishType) {
        return res
          .status(404)
          .json({ message: "Product Finish Type not found", status: false });
      }

      return res.status(200).json({
        data: productFinishType,
        message: "Product Finish Type fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new product finish type record.
   */
  async createProductFinishType(req, res) {
    try {
      let finishTypeData = { ...req.validated };
      
      if (req.file) {
          finishTypeData.image = req.file.path.replace(/\\/g, '/');
      }
      
      const productFinishType = await Product_finish_type.create(finishTypeData);

      if (!productFinishType) {
        return res
          .status(400)
          .json({ message: "Product Finish Type not created", status: false });
      }

      return res
        .status(201)
        .json({ data: productFinishType, message: "Product Finish Type created successfully", status: true });
    } catch (err) {
      console.log(err)
      if (req.files) {
        Object.values(req.files).flat().forEach(file => {
          require('fs').unlinkSync(file.path);
        });
      }
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing product finish type.
   */
  async updateProductFinishType(req, res) {
    try {
      const { id } = req.params;
      const productFinishType = await Product_finish_type.findByPk(id);

      if (!productFinishType) {
        if (req.files) {
          Object.values(req.files).flat().forEach(file => {
            require('fs').unlinkSync(file.path);
          });
        }
        return res
          .status(404)
          .json({ status: false, message: "Product Finish Type not found" });
      }

      let updateData = { ...req.validated };
      
      if (req.files) {
        if (req.files.video_image) {
          if (productFinishType.video_image && require('fs').existsSync(productFinishType.video_image)) {
            require('fs').unlinkSync(productFinishType.video_image);
          }
          updateData.video_image = req.files.video_image[0].path.replace(/\\/g, '/');
        }
        if (req.files.video_file) {
          if (productFinishType.video_url && require('fs').existsSync(productFinishType.video_url)) {
            require('fs').unlinkSync(productFinishType.video_url);
          }
          updateData.video_url = req.files.video_file[0].path.replace(/\\/g, '/');
        }
      }

      const [updated] = await Product_finish_type.update(
        updateData,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Product Finish Type update failed" });
      }

      const updatedProductFinishType = await Product_finish_type.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Product Finish Type updated successfully",
        data: updatedProductFinishType,
      });
    } catch (err) {
      if (req.files) {
        Object.values(req.files).flat().forEach(file => {
          require('fs').unlinkSync(file.path);
        });
      }
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a product finish type by updating its status to 2.
   */
  async deleteProductFinishType(req, res) {
    try {
      const { id } = req.params;
      const productFinishType = await Product_finish_type.findByPk(id);

      if (!productFinishType) {
        return res
          .status(404)
          .json({ status: false, message: "Product Finish Type not found" });
      }

      await productFinishType.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Product Finish Type deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a product finish type's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const productFinishType = await Product_finish_type.findByPk(id);

      if (!productFinishType) {
        return res.status(404).json({ status: false, message: "Product Finish Type not found" });
      }

      const newStatus = productFinishType.status === 1 ? 0 : 1;
      await productFinishType.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Product Finish Type status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ProductFinishTypeController();