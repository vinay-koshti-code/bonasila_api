const AboutPage = require("../../models/AboutPage.model");
const AboutPageTeam = require("../../models/AboutPageTeam.model");
const PageListItems = require("../../models/PageItems.model");
const MetaContent = require("../../models/MetaContent.model");

class AboutPageWebController {
  /**
   * Get complete about page data including page content, team members, and list items
   */
  async getAboutPageData(req, res) {
    try {
      // Get about page content
      const aboutPage = await AboutPage.findByPk(1);
      
      if (!aboutPage) {
        return res.status(404).json({ 
          message: "About page content not found", 
          status: false 
        });
      }

      // Get meta content for about page
      const metaContent = await MetaContent.findOne({
        where: { page_slug: 'about' }
      });

      // Get all team members
      const teamMembers = await AboutPageTeam.findAll({
        where: { status: 1 },
        order: [['id', 'ASC']]
      });

      // Get all about page list items grouped by list_type
      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'about_page',
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
          about_page_content: aboutPage,
          meta_content: metaContent,
          team_members: teamMembers,
          page_items: groupedItems
        },
        message: "About page data fetched successfully",
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

module.exports = new AboutPageWebController();