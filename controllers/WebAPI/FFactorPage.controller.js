const FFactorPage = require("../../models/FFactorPage.model");
const PageListItems = require("../../models/PageItems.model");

class FFactorPageWebController {
  async getFFactorPageData(req, res) {
    try {
      const fFactorPage = await FFactorPage.findByPk(1);
      
      if (!fFactorPage) {
        return res.status(404).json({ 
          message: "F-Factor page content not found", 
          status: false 
        });
      }

      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'ffactor_page',
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
          page_content: fFactorPage,
          page_items: groupedItems
        },
        message: "F-Factor page data fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: err.message 
      });
    }
  }
}

module.exports = new FFactorPageWebController();