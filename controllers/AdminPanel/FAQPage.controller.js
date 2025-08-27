const FAQPage = require("../../models/FAQPage.model");

class FAQPageController {
  /**
   * Fetches the single FAQ page record.
   */
  async getFAQPage(req, res) {
    try {
      const faqPage = await FAQPage.findByPk(1);

      if (!faqPage) {
        return res.status(404).json({ message: "FAQ page content not found", status: false });
      }

      return res.status(200).json({
        data: faqPage,
        message: "FAQ page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
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
          data: faqPage,
          message: "FAQ page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await faqPage.update(validatedData);
        const updatedFAQPage = await FAQPage.findByPk(1);
        return res.status(200).json({
          data: updatedFAQPage,
          message: "FAQ page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
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
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new FAQPageController();