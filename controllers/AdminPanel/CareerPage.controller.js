const CareerPage = require("../../models/CareerPage.model");

class CareerPageController {
  /**
   * Fetches the single career page record.
   */
  async getCareerPage(req, res) {
    try {
      const careerPage = await CareerPage.findByPk(1);

      if (!careerPage) {
        return res.status(404).json({ status: false, message: "Career page content not found"  });
      }

      return res.status(200).json({
        status: true,
        message: "Career page content fetched successfully",
        data: careerPage,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Creates the career page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateCareerPage(req, res) {
    try {
      let careerPage = await CareerPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = { ...req.validated };
      
      // Handle file uploads
      if (req.files) {
        if (req.files.header_image && req.files.header_image[0]) {
          validatedData.header_image = req.files.header_image[0].key;
        }
        if (req.files.invited_image && req.files.invited_image[0]) {
          validatedData.invited_image = req.files.invited_image[0].key;
        }
        if (req.files.about_image && req.files.about_image[0]) {
          validatedData.about_image = req.files.about_image[0].key;
        }
        if (req.files.footer_title_image && req.files.footer_title_image[0]) {
          validatedData.footer_title_image = req.files.footer_title_image[0].key;
        }
        if (req.files.footer_image && req.files.footer_image[0]) {
          validatedData.footer_image = req.files.footer_image[0].key;
        }
      }

      if (!careerPage) {
        // Create the single record
        careerPage = await CareerPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          status: true,
          message: "Career page content created successfully",
          data: careerPage,
        });
      } else {
        // Update the existing record
        await careerPage.update(validatedData);
        const updatedCareerPage = await CareerPage.findByPk(1);
        return res.status(200).json({
          status: true,
          message: "Career page content updated successfully",
          data: updatedCareerPage,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  /**
   * Toggles the career page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const careerPage = await CareerPage.findByPk(1, { scope: 'unscoped' });

      if (!careerPage) {
        return res.status(404).json({ status: false, message: "Career page content not found" });
      }

      const newStatus = careerPage.status === 1 ? 0 : 1;
      await careerPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Career page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new CareerPageController();