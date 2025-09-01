const Request = require("../../models/Contact.model");
const { Op } = require("sequelize");

class RequestController {
  /**
   * Creates a new request record.
   */
  async createRequest(req, res) {
    try {
      const requestData = { ...req.validated };
      
      // Handle file upload
      if (req.file) {
        requestData.file = req.file.path.replace(/\\/g, '/');
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
//   async updateRequest(req, res) {
//     try {
//       const { id } = req.params;
//       const request = await Request.findByPk(id);

//       if (!request) {
//         return res
//           .status(404)
//           .json({ status: false, message: "Request not found" });
//       }

//       const [updated] = await Request.update(
//         req.validated,
//         { where: { id } }
//       );

//       if (!updated) {
//         return res
//           .status(400)
//           .json({ status: false, message: "Request update failed" });
//       }

//       const updatedRequest = await Request.findByPk(id);

//       return res.status(200).json({
//         status: true,
//         message: "Request updated successfully",
//         data: updatedRequest,
//       });
//     } catch (err) {
//       return res
//         .status(500)
//         .json({ status: false, message: "Something went wrong" });
//     }
//   }
}

module.exports = new RequestController();