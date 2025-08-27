const AboutPage = require("../../models/AboutPage.model");

class AboutPageController {
  /**
   * Fetches the single about page record.
   */
  async getAboutPage(req, res) {
    try {
      const aboutPage = await AboutPage.findByPk(1);

      if (!aboutPage) {
        return res.status(404).json({ message: "About page content not found", status: false });
      }

      return res.status(200).json({
        data: aboutPage,
        message: "About page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the about page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateAboutPage(req, res) {
    try {
      let aboutPage = await AboutPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!aboutPage) {
        // Create the single record
        aboutPage = await AboutPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: aboutPage,
          message: "About page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await aboutPage.update(validatedData);
        const updatedAboutPage = await AboutPage.findByPk(1);
        return res.status(200).json({
          data: updatedAboutPage,
          message: "About page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the about page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const aboutPage = await AboutPage.findByPk(1, { scope: 'unscoped' });

      if (!aboutPage) {
        return res.status(404).json({ status: false, message: "About page content not found" });
      }

      const newStatus = aboutPage.status === 1 ? 0 : 1;
      await aboutPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `About page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new AboutPageController();