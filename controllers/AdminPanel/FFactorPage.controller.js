const FFactorPage = require("../../models/FFactorPage.model");

class FFactorPageController {
  /**
   * Fetches the single FFactor page record.
   */
  async getFFactorPage(req, res) {
    try {
      const fFactorPage = await FFactorPage.findByPk(1);

      if (!fFactorPage) {
        return res.status(404).json({ status: false, message: "FFactor page content not found" });
      }

      return res.status(200).json({
        status: true,
        message: "FFactor page content fetched successfully",
        data: fFactorPage,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Creates the FFactor page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateFFactorPage(req, res) {
    try {
      let fFactorPage = await FFactorPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = { ...req.validated };
      
      // Handle file uploads
      if (req.files) {
        if (req.files.header_image && req.files.header_image[0]) {
          validatedData.header_image = req.files.header_image[0].key;
        }
        if (req.files.perffection_video && req.files.perffection_video[0]) {
          validatedData.perffection_video = req.files.perffection_video[0].key;
        }
        if (req.files.footer_video && req.files.footer_video[0]) {
          validatedData.footer_video = req.files.footer_video[0].key;
        }
      }

      if (!fFactorPage) {
        // Create the single record
        fFactorPage = await FFactorPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          status: true,
          message: "FFactor page content created successfully",
          data: fFactorPage,
        });
      } else {
        // Update the existing record
        await fFactorPage.update(validatedData);
        const updatedFFactorPage = await FFactorPage.findByPk(1);
        return res.status(200).json({
          status: true,
          message: "FFactor page content updated successfully",
          data: updatedFFactorPage,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles the FFactor page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const fFactorPage = await FFactorPage.findByPk(1, { scope: 'unscoped' });

      if (!fFactorPage) {
        return res.status(404).json({ status: false, message: "FFactor page content not found" });
      }

      const newStatus = fFactorPage.status === 1 ? 0 : 1;
      await fFactorPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `FFactor page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new FFactorPageController();