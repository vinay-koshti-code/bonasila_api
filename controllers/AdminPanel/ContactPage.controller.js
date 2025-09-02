const ContactPage = require("../../models/ContactPage.model");

class ContactPageController {
  /**
   * Fetches the single contact page record.
   */
  async getContactPage(req, res) {
    try {
      const contactPage = await ContactPage.findByPk(1);

      if (!contactPage) {
        return res.status(404).json({ message: "Contact page content not found", status: false });
      }

      return res.status(200).json({
        data: contactPage,
        message: "Contact page content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Creates the contact page record if it doesn't exist, or updates it if it does.
   */
  async createOrUpdateContactPage(req, res) {
    try {
      let contactPage = await ContactPage.findByPk(1, { scope: 'unscoped' });
      const validatedData = { ...req.validated };

      // Handle uploaded files
      if (req.files) {
        if (req.files.sales_person_image) {
          validatedData.sales_person_image = req.files.sales_person_image[0].key;
        }
        if (req.files.footer_image) {
          validatedData.footer_image = req.files.footer_image[0].key;
        }
      }

      if (!contactPage) {
        // Create the single record
        contactPage = await ContactPage.create({ id: 1, ...validatedData });
        return res.status(201).json({
          data: contactPage,
          message: "Contact page content created successfully",
          status: true,
        });
      } else {
        // Update the existing record
        await contactPage.update(validatedData);
        const updatedContactPage = await ContactPage.findByPk(1);
        return res.status(200).json({
          data: updatedContactPage,
          message: "Contact page content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  /**
   * Toggles the contact page's status between active (1) and inactive (0).
   */
  async toggleStatus(req, res) {
    try {
      const contactPage = await ContactPage.findByPk(1, { scope: 'unscoped' });

      if (!contactPage) {
        return res.status(404).json({ status: false, message: "Contact page content not found" });
      }

      const newStatus = contactPage.status === 1 ? 0 : 1;
      await contactPage.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Contact page status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new ContactPageController();