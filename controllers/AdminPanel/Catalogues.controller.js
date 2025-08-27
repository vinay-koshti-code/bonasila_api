const CataloguesPage = require("../../models/catalogues.model");

class CataloguesPageController {
  /**
   * Fetches the single catalogues page record.
   */
  async getCataloguesPage(req, res) {
    try {
      const cataloguesPage = await CataloguesPage.findByPk(1);

      if (!cataloguesPage) {
        return res.status(404).json({ message: "Catalogues page content not found", status: false });
      }

      return res.status(200).json({
        data: cataloguesPage,
        message: "Catalogues page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the catalogues page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateCataloguesPage(req, res) {
    try {
      let cataloguesPage = await CataloguesPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = req.validated;

      if (!cataloguesPage) {
        // Create the single record
        cataloguesPage = await CataloguesPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: cataloguesPage,
          message: "Catalogues page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await cataloguesPage.update(validatedData);
        const updatedCataloguesPage = await CataloguesPage.findByPk(1);
        return res.status(200).json({
          data: updatedCataloguesPage,
          message: "Catalogues page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the catalogues page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const cataloguesPage = await CataloguesPage.findByPk(1, { scope: 'unscoped' });

      if (!cataloguesPage) {
        return res.status(404).json({ status: false, message: "Catalogues page content not found" });
      }

      const newStatus = cataloguesPage.status === 1 ? 0 : 1;
      await cataloguesPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Catalogues page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new CataloguesPageController();