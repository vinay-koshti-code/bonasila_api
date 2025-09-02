const Request = require("../../models/Contact.model");
const { Op } = require("sequelize");

class RequestController {
  /**
   * Fetches a paginated, filterable, and sortable list of requests.
   */
  async getRequests(req, res) {
    try {
      const { page, limit, request_type, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};

      if (status == 0 || status == 1 || status == 2) {
        where.status = status;
      }

      if (request_type) {
        where.request_type = request_type;
      }

      if (sort) {
        let sortOptions = ["id", "posted_date", "request_type", "status"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await Request.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const requests = result.rows;

      if (requests.length === 0) {
        return res
          .status(404)
          .json({ message: "No Requests found", status: false });
      }

      return res.status(200).json({
        status: true,
        message: "Requests fetched successfully",
        data: requests,
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
   * Creates a new request record.
   */
  async createRequest(req, res) {
    try {
      const requestData = { ...req.validated };
      
      // Handle file upload
      if (req.file) {
        requestData.file = req.file.key;
      }
      
      const request = await Request.create(requestData);

      if (!request) {
        return res
          .status(400)
          .json({ message: "Request not created", status: false });
      }

      return res
        .status(201)
        .json({ data: request, message: "Request created successfully", status: true });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing request.
   */
  async updateRequest(req, res) {
    try {
      const { id } = req.params;
      const request = await Request.findByPk(id);

      if (!request) {
        return res
          .status(404)
          .json({ status: false, message: "Request not found" });
      }

      const updateData = { ...req.validated };
      
      // Handle file upload
      if (req.file) {
        updateData.file = req.file.key;
      }

      const [updated] = await Request.update(
        updateData,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Request update failed" });
      }

      const updatedRequest = await Request.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Request updated successfully",
        data: updatedRequest,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Fetches a single request.
   */
  async getRequest(req, res) {
    try {
      const { id } = req.params;
      const request = await Request.findByPk(id);

      if (!request) {
        return res
          .status(404)
          .json({ message: "Request not found", status: false });
      }

      return res.status(200).json({
        data: request,
        message: "Request fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a request by updating its status to 2.
   */
  async deleteRequest(req, res) {
    try {
      const { id } = req.params;
      const request = await Request.findByPk(id);

      if (!request) {
        return res
          .status(404)
          .json({ status: false, message: "Request not found" });
      }

      await request.update({ status: 2 });

      return res
        .status(200)
        .json({ status: true, message: "Request deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a request's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const request = await Request.findByPk(id);

      if (!request) {
        return res.status(404).json({ status: false, message: "Request not found" });
      }

      const newStatus = request.status === 1 ? 0 : 1;
      await request.update({ status: newStatus });

      return res.status(200).json({ status: true, message: "Request status updated successfully" });

    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new RequestController();