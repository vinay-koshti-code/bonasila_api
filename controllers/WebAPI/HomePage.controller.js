const HomePage = require("../../models/HomePage.model");
const PageListItems = require("../../models/PageItems.model");
const MetaContent = require("../../models/MetaContent.model");

class HomePageWebController {
  /**
   * Get complete homepage data including page content and all list items
   */
  async getHomePageData(req, res) {
    try {
      // Get homepage content
      const homePage = await HomePage.findByPk(1);
      
      if (!homePage) {
        return res.status(404).json({ 
          message: "Homepage content not found", 
          status: false 
        });
      }

      // Get meta content for homepage
      const metaContent = await MetaContent.findOne({
        where: { page_slug: 'home' }
      });

      // Get all homepage list items grouped by list_type
      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'home_page',
          status: 1
        },
        order: [['order_no', 'ASC'], ['id', 'ASC']]
      });

      // Group items by list_type
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
          homepage_content: homePage,
          meta_content: metaContent,
          page_items: groupedItems
        },
        message: "Homepage data fetched successfully",
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

module.exports = new HomePageWebController();