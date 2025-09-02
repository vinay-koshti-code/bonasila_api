const PressReleasePage = require("../../models/PressReleasePage.model");
const { Op } = require("sequelize");

class PressReleasePageController {
  async getPressReleasePages(req, res) {
    try {
      const { page, limit, status, title, category, sort, order } = req.query;
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

      if (category) {
        where.category = {
          [Op.like]: `%${category}%`,
        };
      }

      if (sort) {
        let sortOptions = ["id", "title", "category", "date", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await PressReleasePage.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const pressReleasePages = result.rows;

      if (pressReleasePages.length === 0) {
        return res.status(404).json({ message: "No press release pages found", status: false });
      }

      return res.status(200).json({
        status: true,
        message: "Press release pages fetched successfully",
        data: pressReleasePages,
        totalCount: result.count,
        currentPage: pageInt,
        totalPages: Math.ceil(result.count / limitInt),
        rowPerPage: limitInt,
      });
    } catch (e) {
      console.log(e)
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async getPressReleasePage(req, res) {
    try {
      const { id } = req.params;
      const pressReleasePage = await PressReleasePage.findByPk(id);

      if (!pressReleasePage) {
        return res.status(404).json({ message: "Press release page not found", status: false });
      }

      return res.status(200).json({
        data: pressReleasePage,
        message: "Press release page fetched successfully",
        status: true,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async createPressReleasePage(req, res) {
    try {
      const validatedData = { ...req.validated };

      if (req.files) {
        if (req.files.banner_image && req.files.banner_image[0]) {
          validatedData.banner_image = req.files.banner_image[0].key;
        }
        if (req.files.image && req.files.image[0]) {
          validatedData.image = req.files.image[0].key;
        }
      }

      const pressReleasePage = await PressReleasePage.create(validatedData);

      if (!pressReleasePage) {
        return res.status(400).json({ message: "Press release page not created", status: false });
      }

      return res.status(201).json({
        data: pressReleasePage,
        message: "Press release page created successfully",
        status: true,
      });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async updatePressReleasePage(req, res) {
    try {
      const { id } = req.params;
      const pressReleasePage = await PressReleasePage.findByPk(id);

      if (!pressReleasePage) {
        return res.status(404).json({ status: false, message: "Press release page not found" });
      }

      const updateData = { ...req.validated };

      if (req.files) {
        if (req.files.banner_image && req.files.banner_image[0]) {
          updateData.banner_image = req.files.banner_image[0].key;
        }
        if (req.files.image && req.files.image[0]) {
          updateData.image = req.files.image[0].key;
        }
      }

      const [updated] = await PressReleasePage.update(updateData, { where: { id } });

      if (!updated) {
        return res.status(400).json({ status: false, message: "Press release page update failed" });
      }

      const updatedPressReleasePage = await PressReleasePage.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Press release page updated successfully",
        data: updatedPressReleasePage,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const pressReleasePage = await PressReleasePage.scope("unscoped").findByPk(id);

      if (!pressReleasePage) {
        return res.status(404).json({ status: false, message: "Press release page not found" });
      }

      const newStatus = pressReleasePage.status === 1 ? 0 : 1;
      await pressReleasePage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: "Press release page status updated successfully",
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async deletePressReleasePage(req, res) {
    try {
      const { id } = req.params;
      const pressReleasePage = await PressReleasePage.findByPk(id);

      if (!pressReleasePage) {
        return res.status(404).json({ status: false, message: "Press release page not found" });
      }

      await pressReleasePage.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res.status(200).json({ status: true, message: "Press release page deleted successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new PressReleasePageController();