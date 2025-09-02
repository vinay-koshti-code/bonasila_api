const ThankYouPage = require("../../models/thankyouPage.model");
const { Op } = require("sequelize");

class ThankYouPageController {
  async getThankYouPages(req, res) {
    try {
      const { page, limit, page_type, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};

      if (page_type) {
        where.page_type = page_type;
      }

      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (sort) {
        let sortOptions = ["id", "page_type", "title", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await ThankYouPage.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const thankYouPages = result.rows;

      if (thankYouPages.length === 0) {
        return res.status(404).json({ message: "No thank you pages found", status: false });
      }

      return res.status(200).json({
        data: thankYouPages,
        message: "Thank you pages fetched successfully",
        status: true,
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

  async getThankYouPage(req, res) {
    try {
      const { id } = req.params;
      const thankYouPage = await ThankYouPage.findByPk(id);

      if (!thankYouPage) {
        return res.status(404).json({ message: "Thank you page not found", status: false });
      }

      return res.status(200).json({
        data: thankYouPage,
        message: "Thank you page fetched successfully",
        status: true,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async createThankYouPage(req, res) {
    try {
      const validatedData = { ...req.validated };

      if (req.files) {
        if (req.files.background_image && req.files.background_image[0]) {
          validatedData.background_image = req.files.background_image[0].key;
        }
        if (req.files.logo_image && req.files.logo_image[0]) {
          validatedData.logo_image = req.files.logo_image[0].key;
        }
      }

      // Check if record exists for this page_type
      let thankYouPage = await ThankYouPage.scope('unscoped').findOne({
        where: { page_type: validatedData.page_type }
      });

      if (thankYouPage) {
        // Update existing record
        await thankYouPage.update(validatedData);
        const updatedPage = await ThankYouPage.findByPk(thankYouPage.id);
        return res.status(200).json({
          data: updatedPage,
          message: "Thank you page updated successfully",
          status: true,
        });
      } else {
        // Create new record
        thankYouPage = await ThankYouPage.create(validatedData);
        return res.status(201).json({
          data: thankYouPage,
          message: "Thank you page created successfully",
          status: true,
        });
      }
    } catch (err) {
      console.log(err)
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async updateThankYouPage(req, res) {
    try {
      const { id } = req.params;
      const thankYouPage = await ThankYouPage.findByPk(id);

      if (!thankYouPage) {
        return res.status(404).json({ status: false, message: "Thank you page not found" });
      }

      const updateData = { ...req.validated };

      if (req.files) {
        if (req.files.background_image && req.files.background_image[0]) {
          updateData.background_image = req.files.background_image[0].key;
        }
        if (req.files.logo_image && req.files.logo_image[0]) {
          updateData.logo_image = req.files.logo_image[0].key;
        }
      }

      const [updated] = await ThankYouPage.update(updateData, { where: { id } });

      if (!updated) {
        return res.status(400).json({ status: false, message: "Thank you page update failed" });
      }

      const updatedThankYouPage = await ThankYouPage.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Thank you page updated successfully",
        data: updatedThankYouPage,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const thankYouPage = await ThankYouPage.scope("unscoped").findByPk(id);

      if (!thankYouPage) {
        return res.status(404).json({ status: false, message: "Thank you page not found" });
      }

      const newStatus = thankYouPage.status === 1 ? 0 : 1;
      await thankYouPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Thank you page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async deleteThankYouPage(req, res) {
    try {
      const { id } = req.params;
      const thankYouPage = await ThankYouPage.findByPk(id);

      if (!thankYouPage) {
        return res.status(404).json({ status: false, message: "Thank you page not found" });
      }

      await thankYouPage.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res.status(200).json({ status: true, message: "Thank you page deleted successfully" });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ThankYouPageController();