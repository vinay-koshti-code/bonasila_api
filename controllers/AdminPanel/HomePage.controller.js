const HomePage = require("../../models/HomePage.model");

class HomePageController {
  /**
   * Fetches the single homepage record.
   */
  async getHomePage(req, res) {
    try {
      const homePage = await HomePage.findByPk(1);

      if (!homePage) {
        return res.status(404).json({ message: "Homepage content not found", status: false });
      }

      return res.status(200).json({
        data: homePage,
        message: "Homepage content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the homepage record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateHomePage(req, res) {
    try {
      let homePage = await HomePage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!homePage) {
        // Create the single record
        homePage = await HomePage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: homePage,
          message: "Homepage content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await homePage.update(validatedData);
        const updatedHomePage = await HomePage.findByPk(1);
        return res.status(200).json({
          data: updatedHomePage,
          message: "Homepage content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the homepage's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const homePage = await HomePage.findByPk(1, { scope: 'unscoped' });

      if (!homePage) {
        return res.status(404).json({ status: false, message: "Homepage content not found" });
      }

      const newStatus = homePage.status === 1 ? 0 : 1;
      await homePage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Homepage status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new HomePageController();