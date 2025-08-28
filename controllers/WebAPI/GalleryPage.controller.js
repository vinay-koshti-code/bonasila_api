const GalleryPage = require("../../models/GalleryPage.model");
const PageListItems = require("../../models/PageItems.model");

class GalleryPageWebController {
  async getGalleryPageData(req, res) {
    try {
      const galleryPages = await GalleryPage.findAll({
        where: { status: 1 },
        order: [['created_on', 'DESC']]
      });

      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'gallery_page',
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
          gallery_pages: galleryPages,
          page_items: groupedItems
        },
        message: "Gallery page data fetched successfully",
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

module.exports = new GalleryPageWebController();