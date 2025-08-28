const ContactPage = require("../../models/ContactPage.model");
const PageListItems = require("../../models/PageItems.model");

class ContactPageWebController {
  async getContactPageData(req, res) {
    try {
      const contactPage = await ContactPage.findByPk(1);
      
      if (!contactPage) {
        return res.status(404).json({ 
          message: "Contact page content not found", 
          status: false 
        });
      }

      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'contact_page',
          status: 1
        },
        order: [['order_no', 'ASC'], ['id', 'ASC']]
      });

      const groupedItems = {
        plant_lover_steps: [],
        brand: [],
        product: [],
        name_list: [],
        slider: [],
        client_list: []
      };

      pageItems.forEach(item => {
        if (groupedItems[item.list_type]) {
          groupedItems[item.list_type].push(item);
        }
      });

      return res.status(200).json({
        data: {
          page_content: contactPage,
          page_items: groupedItems
        },
        message: "Contact page data fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: "Something went wrong" 
      });
    }
  }
}

module.exports = new ContactPageWebController();