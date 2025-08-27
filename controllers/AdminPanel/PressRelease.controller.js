const PressReleasePage = require("../../models/PressReleasePage.model");
const { Op } = require("sequelize");

class PressReleasePageController {
  /**
   * Fetches a paginated, filterable, and sortable list of press releases.
   */
  async getPressReleasePages(req, res) {
    try {
      const { page, limit, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};
      
      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (sort) {
        let sortOptions = ["id", "created_on", "status"];
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

      const pressReleases = result.rows;

      if (pressReleases.length === 0) {
        return res
          .status(404)
          .json({ message: "No Press Releases found", status: false });
      }

      return res.status(200).json({
        data: pressReleases,
        message: "Press Releases fetched successfully",
        status: true,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Fetches a single press release item.
   */
  async getPressReleasePage(req, res) {
    try {
      const { id } = req.params;
      const pressRelease = await PressReleasePage.findByPk(id);

      if (!pressRelease) {
        return res
          .status(404)
          .json({ message: "Press Release not found", status: false });
      }

      return res.status(200).json({
        data: pressRelease,
        message: "Press Release fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates a new press release record.
   */
  async createPressReleasePage(req, res) {
    try {
      const pressRelease = await PressReleasePage.create(req.validated);

      if (!pressRelease) {
        return res
          .status(400)
          .json({ message: "Press Release not created", status: false });
      }

      return res
        .status(201)
        .json({ data: pressRelease, message: "Press Release created successfully", status: true });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Updates an existing press release.
   */
  async updatePressReleasePage(req, res) {
    try {
      const { id } = req.params;
      const pressRelease = await PressReleasePage.findByPk(id);

      if (!pressRelease) {
        return res
          .status(404)
          .json({ status: false, message: "Press Release not found" });
      }

      const [updated] = await PressReleasePage.update(
        req.validated,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "Press Release update failed" });
      }

      const updatedPressRelease = await PressReleasePage.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "Press Release updated successfully",
        data: updatedPressRelease,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Soft deletes a press release by updating its status to 2.
   */
  async deletePressReleasePage(req, res) {
    try {
      const { id } = req.params;
      const pressRelease = await PressReleasePage.findByPk(id);

      if (!pressRelease) {
        return res
          .status(404)
          .json({ status: false, message: "Press Release not found" });
      }

      await pressRelease.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "Press Release deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles a press release's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const pressRelease = await PressReleasePage.findByPk(id);

      if (!pressRelease) {
        return res.status(404).json({ status: false, message: "Press Release not found" });
      }

      const newStatus = pressRelease.status === 1 ? 0 : 1;
      await pressRelease.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Press Release status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new PressReleasePageController();