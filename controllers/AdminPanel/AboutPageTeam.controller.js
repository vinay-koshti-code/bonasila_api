const AboutPageTeam = require("../../models/AboutPageTeam.model");
const { Op } = require("sequelize");

class AboutPageTeamController {
  /**
   * Fetches a paginated, filterable, and sortable list of team members.
   */
  async getAboutPageTeams(req, res) {
    try {
      const { page, limit, name, position, status, sort, order } = req.query;
      const pageInt = parseInt(page) || 1;
      const limitInt = parseInt(limit) || 10;
      const offset = (pageInt - 1) * limitInt;
      let where = {};
      let options = {};
      
      if (status == 0 || status == 1) {
        where.status = status;
      }

      if (name) {
        where.name = { [Op.like]: `%${name}%` };
      }

      if (position) {
        where.position = { [Op.like]: `%${position}%` };
      }

      if (sort) {
        let sortOptions = ["id", "name", "position", "status", "created_on"];
        if (sortOptions.includes(sort)) {
          options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
        }
      }

      const result = await AboutPageTeam.findAndCountAll({
        where,
        offset,
        limit: limitInt,
        ...options,
      });

      const teams = result.rows;

      if (teams.length === 0) {
        return res
          .status(404)
          .json({  status: false,message: "No About Page Teams found" });
      }

      return res.status(200).json({
        status: true,
        message: "About Page Teams fetched successfully",
        data: teams,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Fetches a single team member.
   */
  async getAboutPageTeam(req, res) {
    try {
      const { id } = req.params;
      const team = await AboutPageTeam.findByPk(id);

      if (!team) {
        return res
          .status(404)
          .json({ status: false, message: "About Page Team not found" });
      }

      return res.status(200).json({
        status: true,
        message: "About Page Team fetched successfully",
        data: team,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Creates a new team member record.
   */
  async createAboutPageTeam(req, res) {
    try {
      const teamData = { ...req.validated };
      
      // Handle file upload
      if (req.file) {
        teamData.image = req.file.key;
      }
      
      const team = await AboutPageTeam.create(teamData);

      if (!team) {
        return res
          .status(400)
          .json({  status: false, message: "About Page Team not created" });
      }

      return res
        .status(201)
        .json({ status: true,  message: "About Page Team created successfully", data: team  });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Updates an existing team member.
   */
  async updateAboutPageTeam(req, res) {
    try {
      const { id } = req.params;
      const team = await AboutPageTeam.findByPk(id);

      if (!team) {
        return res
          .status(404)
          .json({ status: false, message: "About Page Team not found" });
      }

      const updateData = { ...req.validated };
      
      // Handle file upload
      if (req.file) {
        updateData.image = req.file.key;
      }

      const [updated] = await AboutPageTeam.update(
        updateData,
        { where: { id } }
      );

      if (!updated) {
        return res
          .status(400)
          .json({ status: false, message: "About Page Team update failed" });
      }

      const updatedTeam = await AboutPageTeam.findByPk(id);

      return res.status(200).json({
        status: true,
        message: "About Page Team updated successfully",
        data: updatedTeam,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Soft deletes a team member by updating its status to 2.
   */
  async deleteAboutPageTeam(req, res) {
    try {
      const { id } = req.params;
      const team = await AboutPageTeam.findByPk(id);

      if (!team) {
        return res
          .status(404)
          .json({ status: false, message: "About Page Team not found" });
      }

      await team.update({
        status: 2,
        deleted_on: new Date(),
      });

      return res
        .status(200)
        .json({ status: true, message: "About Page Team deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles a team member's status between active (1) and inactive (0).
   */
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const team = await AboutPageTeam.findByPk(id);

      if (!team) {
        return res.status(404).json({ status: false, message: "About Page Team not found" });
      }

      const newStatus = team.status === 1 ? 0 : 1;
      await team.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `About Page Team status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }
}

module.exports = new AboutPageTeamController();