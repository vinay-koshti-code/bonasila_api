const DIYPage = require("../../models/DIYPage.model");
const PageListItems = require("../../models/PageItems.model");

class DIYPageWebController {
  async getDIYPageData(req, res) {
    try {
      const diyPage = await DIYPage.findByPk(1);
      
      if (!diyPage) {
        return res.status(404).json({ 
          message: "DIY page content not found", 
          status: false 
        });
      }

      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'diy_page',
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
          page_content: diyPage,
          page_items: groupedItems
        },
        message: "DIY page data fetched successfully",
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

module.exports = new DIYPageWebController();