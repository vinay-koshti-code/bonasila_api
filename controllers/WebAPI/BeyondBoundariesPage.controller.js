const BeyondBoundaryPage = require("../../models/BeyondBoundaries.model");
const PageListItems = require("../../models/PageItems.model");

class BeyondBoundariesPageWebController {
  /**
   * Get complete beyond boundaries page data including page content and list items
   */
  async getBeyondBoundariesPageData(req, res) {
    try {
      // Get beyond boundaries page content
      const beyondBoundaryPage = await BeyondBoundaryPage.findByPk(1);
      
      if (!beyondBoundaryPage) {
        return res.status(404).json({ 
          message: "Beyond boundaries page content not found", 
          status: false 
        });
      }

      // Get all beyond boundary page list items grouped by list_type
      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'beyond_boundary_page',
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
          page_content: beyondBoundaryPage,
          page_items: groupedItems
        },
        message: "Beyond boundaries page data fetched successfully",
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

module.exports = new BeyondBoundariesPageWebController();