const CareerPageLists = require("../../models/CareerPostingList.model");
const { Op } = require("sequelize");

class CareerPageListsController {
  /**
   * Fetches a paginated, filterable, and sortable list of job postings.
   */
  async getCareerPageLists(req, res) {
    try {
      const { page, limit, posting_title, posting_location, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};

      if (status == 0 || status == 1) {
        where.status = status;
      }
      
      if (posting_title) {
        where.posting_title = { [Op.like]: `%${posting_title}%` };
      }

      if (posting_location) {
        where.posting_location = { [Op.like]: `%${posting_location}%` };
      }

      if (sort) {
        let sortOptions = ["id", "posting_title", "posting_location", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await CareerPageLists.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const careerPageLists = result.rows;

      if (careerPageLists.length === 0) {
        return res
          .status(404)
          .json({ message: "No job postings found", status: false });
      }

      return res.status(200).json({
        status: true,
        message: "Job postings fetched successfully",
        data: careerPageLists,
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
   * Fetches a single job posting item.
   */
  async getCareerPageList(req, res) {
    try {
      const { id } = req.params;
      const careerPageList = await CareerPageLists.findByPk(id);

      if (!careerPageList) {
        return res
          .status(404)
          .json({ message: "Job posting not found", status: false });
      }

      return res.status(200).json({
        data: careerPageList,
        message: "Job posting fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new job posting record.
   */
  async createCareerPageList(req, res) {
    try {
      const careerPageList = await CareerPageLists.create(req.validated);

      if (!careerPageList) {
        return res
          .status(400)
          .json({ message: "Job posting not created", status: false });
      }

      return res
        .status(201)
        .json({ data: careerPageList, message: "Job posting created successfully", status: true });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing job posting.
   */
  async updateCareerPageList(req, res) {
    try {
      const { id } = req.params;
      const careerPageList = await CareerPageLists.findByPk(id);

      if (!careerPageList) {
        return res
          .status(404)
          .json({ status: false, message: "Job posting not found" });
      }

      const [updated] = await CareerPageLists.update(
        req.validated,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Job posting update failed" });
      }

      const updatedCareerPageList = await CareerPageLists.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Job posting updated successfully",
        data: updatedCareerPageList,
      });
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a job posting by updating its status to 2.
   */
  async deleteCareerPageList(req, res) {
    try {
      const { id } = req.params;
      const careerPageList = await CareerPageLists.findByPk(id);

      if (!careerPageList) {
        return res
          .status(404)
          .json({ status: false, message: "Job posting not found" });
      }

      await careerPageList.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Job posting deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a job posting's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const careerPageList = await CareerPageLists.findByPk(id);

      if (!careerPageList) {
        return res.status(404).json({ status: false, message: "Job posting not found" });
      }

      const newStatus = careerPageList.status === 1 ? 0 : 1;
      await careerPageList.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Job posting status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new CareerPageListsController();