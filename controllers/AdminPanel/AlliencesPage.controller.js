const AlliancesPage = require("../../models/AlliencesPage.model");

class AlliancesPageController {
  /**
   * Fetches the single Alliances page record.
   */
  async getAlliancesPage(req, res) {
    try {
      const alliancesPage = await AlliancesPage.findByPk(1);

      if (!alliancesPage) {
        return res.status(404).json({ message: "Alliances page content not found", status: false });
      }

      return res.status(200).json({
        data: alliancesPage,
        message: "Alliances page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the Alliances page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateAlliancesPage(req, res) {
    try {
      let alliancesPage = await AlliancesPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!alliancesPage) {
        // Create the single record
        alliancesPage = await AlliancesPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: alliancesPage,
          message: "Alliances page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await alliancesPage.update(validatedData);
        const updatedAlliancesPage = await AlliancesPage.findByPk(1);
        return res.status(200).json({
          data: updatedAlliancesPage,
          message: "Alliances page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the Alliances page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const alliancesPage = await AlliancesPage.findByPk(1, { scope: 'unscoped' });

      if (!alliancesPage) {
        return res.status(404).json({ status: false, message: "Alliances page content not found" });
      }

      const newStatus = alliancesPage.status === 1 ? 0 : 1;
      await alliancesPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Alliances page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new AlliancesPageController();