const FAQPage = require("../../models/FAQPage.model");

class FAQPageController {
  /**
   * Fetches the single FAQ page record.
   */
  async getFAQPage(req, res) {
    try {
      const faqPage = await FAQPage.findByPk(1);

      if (!faqPage) {
        return res.status(404).json({ status: false, message: "FAQ page content not found" });
      }

      return res.status(200).json({
        status: true,
        message: "FAQ page content fetched successfully",
        data: faqPage,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Creates the FAQ page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateFAQPage(req, res) {
    try {
      let faqPage = await FAQPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!faqPage) {
        // Create the single record
        faqPage = await FAQPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          status: true,
          message: "FAQ page content created successfully",
          data: faqPage,
        });
      } else {
        // Update the existing record
        await faqPage.update(validatedData);
        const updatedFAQPage = await FAQPage.findByPk(1);
        return res.status(200).json({
          status: true,
          message: "FAQ page content updated successfully",
          data: updatedFAQPage,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles the FAQ page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const faqPage = await FAQPage.findByPk(1, { scope: 'unscoped' });

      if (!faqPage) {
        return res.status(404).json({ status: false, message: "FAQ page content not found" });
      }

      const newStatus = faqPage.status === 1 ? 0 : 1;
      await faqPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `FAQ page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new FAQPageController();