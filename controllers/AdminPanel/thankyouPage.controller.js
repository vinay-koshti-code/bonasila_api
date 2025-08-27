const ThankYouPage = require("../../models/thankyouPage.model");

class ThankYouPageController {
  /**
   * Fetches the single thank you page record.
   */
  async getThankYouPage(req, res) {
    try {
      const thankYouPage = await ThankYouPage.findByPk(1);

      if (!thankYouPage) {
        return res.status(404).json({ message: "Thank you page content not found", status: false });
      }

      return res.status(200).json({
        data: thankYouPage,
        message: "Thank you page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the thank you page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateThankYouPage(req, res) {
    try {
      let thankYouPage = await ThankYouPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!thankYouPage) {
        // Create the single record
        thankYouPage = await ThankYouPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: thankYouPage,
          message: "Thank you page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await thankYouPage.update(validatedData);
        const updatedThankYouPage = await ThankYouPage.findByPk(1);
        return res.status(200).json({
          data: updatedThankYouPage,
          message: "Thank you page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the thank you page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const thankYouPage = await ThankYouPage.findByPk(1, { scope: 'unscoped' });

      if (!thankYouPage) {
        return res.status(404).json({ status: false, message: "Thank you page content not found" });
      }

      const newStatus = thankYouPage.status === 1 ? 0 : 1;
      await thankYouPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Thank you page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ThankYouPageController();