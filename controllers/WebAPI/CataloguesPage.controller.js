const CataloguesPage = require("../../models/CataloguesPage.model");
const PageListItems = require("../../models/PageItems.model");

class CataloguesPageWebController {
  async getCataloguesPageData(req, res) {
    try {
      const cataloguesPage = await CataloguesPage.findByPk(1);
      
      if (!cataloguesPage) {
        return res.status(404).json({ 
          message: "Catalogues page content not found", 
          status: false 
        });
      }

      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'catalogues_page',
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
          page_content: cataloguesPage,
          page_items: groupedItems
        },
        message: "Catalogues page data fetched successfully",
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

module.exports = new CataloguesPageWebController();