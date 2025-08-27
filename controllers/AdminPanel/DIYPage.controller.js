const DIYPage = require("../../models/DIYPage.model");

class DIYPageController {
  /**
   * Fetches the single DIY page record.
   */
  async getDIYPage(req, res) {
    try {
      const diyPage = await DIYPage.findByPk(1);

      if (!diyPage) {
        return res.status(404).json({ message: "DIY page content not found", status: false });
      }

      return res.status(200).json({
        data: diyPage,
        message: "DIY page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the DIY page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateDIYPage(req, res) {
    try {
      let diyPage = await DIYPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!diyPage) {
        // Create the single record
        diyPage = await DIYPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: diyPage,
          message: "DIY page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await diyPage.update(validatedData);
        const updatedDIYPage = await DIYPage.findByPk(1);
        return res.status(200).json({
          data: updatedDIYPage,
          message: "DIY page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
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
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new DIYPageController();