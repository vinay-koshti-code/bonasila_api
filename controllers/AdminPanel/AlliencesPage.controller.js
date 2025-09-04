const AlliancesPage = require("../../models/AlliencesPage.model");

class AlliancesPageController {
  /**
   * Fetches the single Alliances page record.
   */
  async getAlliancesPage(req, res) {
    try {
      const alliancesPage = await AlliancesPage.findByPk(1);

      if (!alliancesPage) {
        return res.status(404).json({ status: false, message: "Alliances page content not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Alliances page content fetched successfully",
        data: alliancesPage,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Creates the Alliances page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateAlliancesPage(req, res) {
    try {
      let alliancesPage = await AlliancesPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = { ...req.validated };
      
      // Handle file upload
      if (req.file) {
        validatedData.header_image = req.file.key;
      }

      if (!alliancesPage) {
        // Create the single record
        alliancesPage = await AlliancesPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          status: true,
          message: "Alliances page content created successfully",
          data: alliancesPage,
        });
      } else {
        // Update the existing record
        await alliancesPage.update(validatedData);
        const updatedAlliancesPage = await AlliancesPage.findByPk(1);
        return res.status(200).json({
          status: true,
          message: "Alliances page content updated successfully",
          data: updatedAlliancesPage,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
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
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new AlliancesPageController();