const PressReleasePage = require("../../models/PressReleasePage.model");
const PageListItems = require("../../models/PageItems.model");

class PressReleasePageWebController {
  async getPressReleasePageData(req, res) {
    try {
      const pressReleasePages = await PressReleasePage.findAll({
        where: { status: 1 },
        order: [['created_on', 'DESC']]
      });

      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'press_release_page',
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
          press_release_pages: pressReleasePages,
          page_items: groupedItems
        },
        message: "Press release page data fetched successfully",
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

module.exports = new PressReleasePageWebController();