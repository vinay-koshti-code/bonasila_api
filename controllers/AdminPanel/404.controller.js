const FourOFourPage = require("../../models/404.model");

class FourOFourPageController {
  /**
   * Fetches the single 404 page record.
   */
  async getFourOFourPage(req, res) {
    try {
      const fourOFourPage = await FourOFourPage.findByPk(1);

      if (!fourOFourPage) {
        return res.status(404).json({ message: "404 page content not found", status: false });
      }

      return res.status(200).json({
        data: fourOFourPage,
        message: "404 page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the 404 page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateFourOFourPage(req, res) {
    try {
      let fourOFourPage = await FourOFourPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!fourOFourPage) {
        // Create the single record
        fourOFourPage = await FourOFourPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: fourOFourPage,
          message: "404 page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await fourOFourPage.update(validatedData);
        const updatedFourOFourPage = await FourOFourPage.findByPk(1);
        return res.status(200).json({
          data: updatedFourOFourPage,
          message: "404 page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the 404 page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const fourOFourPage = await FourOFourPage.findByPk(1, { scope: 'unscoped' });

      if (!fourOFourPage) {
        return res.status(404).json({ status: false, message: "404 page content not found" });
      }

      const newStatus = fourOFourPage.status === 1 ? 0 : 1;
      await fourOFourPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `404 page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new FourOFourPageController();