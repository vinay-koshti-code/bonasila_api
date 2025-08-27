const BeyondBoundaryPage = require("../../models/BeyondBoundaries.model");

class BeyondBoundaryPageController {
  /**
   * Fetches the single Beyond Boundary page record.
   */
  async getBeyondBoundaryPage(req, res) {
    try {
      const beyondBoundaryPage = await BeyondBoundaryPage.findByPk(1);

      if (!beyondBoundaryPage) {
        return res.status(404).json({ message: "Beyond Boundary page content not found", status: false });
      }

      return res.status(200).json({
        data: beyondBoundaryPage,
        message: "Beyond Boundary page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the Beyond Boundary page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateBeyondBoundaryPage(req, res) {
    try {
      let beyondBoundaryPage = await BeyondBoundaryPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!beyondBoundaryPage) {
        // Create the single record
        beyondBoundaryPage = await BeyondBoundaryPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: beyondBoundaryPage,
          message: "Beyond Boundary page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await beyondBoundaryPage.update(validatedData);
        const updatedBeyondBoundaryPage = await BeyondBoundaryPage.findByPk(1);
        return res.status(200).json({
          data: updatedBeyondBoundaryPage,
          message: "Beyond Boundary page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the Beyond Boundary page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const beyondBoundaryPage = await BeyondBoundaryPage.findByPk(1, { scope: 'unscoped' });

      if (!beyondBoundaryPage) {
        return res.status(404).json({ status: false, message: "Beyond Boundary page content not found" });
      }

      const newStatus = beyondBoundaryPage.status === 1 ? 0 : 1;
      await beyondBoundaryPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Beyond Boundary page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new BeyondBoundaryPageController();