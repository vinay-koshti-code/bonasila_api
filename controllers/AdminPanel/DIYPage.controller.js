const DIYPage = require("../../models/DIYPage.model");

class DIYPageController {
  /**
   * Fetches the single DIY page record.
   */
  async getDIYPage(req, res) {
    try {
      const diyPage = await DIYPage.findByPk(1);

      if (!diyPage) {
        return res.status(404).json({ status: false, message: "DIY page content not found" });
      }

      return res.status(200).json({
        status: true,
        message: "DIY page content fetched successfully",
        data: diyPage,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Creates the DIY page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateDIYPage(req, res) {
    try {
      let diyPage = await DIYPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = { ...req.validated };
      
      // Handle file uploads
      if (req.files) {
        if (req.files.video_file && req.files.video_file[0]) {
          validatedData.video_file = req.files.video_file[0].key;
        }
        if (req.files.popup_file && req.files.popup_file[0]) {
          validatedData.popup_file = req.files.popup_file[0].key;
        }
      }

      if (!diyPage) {
        // Create the single record
        diyPage = await DIYPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          status: true,
          message: "DIY page content created successfully",
          data: diyPage,
        });
      } else {
        // Update the existing record
        await diyPage.update(validatedData);
        const updatedDIYPage = await DIYPage.findByPk(1);
        return res.status(200).json({
          status: true,
          message: "DIY page content updated successfully",
          data: updatedDIYPage,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles the DIY page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const diyPage = await DIYPage.findByPk(1, { scope: 'unscoped' });

      if (!diyPage) {
        return res.status(404).json({ status: false, message: "DIY page content not found" });
      }

      const newStatus = diyPage.status === 1 ? 0 : 1;
      await diyPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `DIY page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new DIYPageController();