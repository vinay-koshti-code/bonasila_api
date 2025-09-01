const CareerPage = require("../../models/CareerPage.model");
const CareerPostingList = require("../../models/CareerPostingList.model");
const PageListItems = require("../../models/PageItems.model");
const MetaContent = require("../../models/MetaContent.model");

class CareerPageWebController {
  /**
   * Get complete career page data including page content, job postings, and list items
   */
  async getCareerPageData(req, res) {
    try {
      // Get career page content
      const careerPage = await CareerPage.findByPk(1);
      
      if (!careerPage) {
        return res.status(404).json({ 
          message: "Career page content not found", 
          status: false 
        });
      }

      // Get meta content for career page
      const metaContent = await MetaContent.findOne({
        where: { page_slug: 'career' }
      });

      // Get all active job postings
      const jobPostings = await CareerPostingList.findAll({
        where: { status: 1 },
        order: [['created_on', 'DESC']]
      });

      // Get all career page list items grouped by list_type
      const pageItems = await PageListItems.findAll({
        where: {
          page_type: 'career_page',
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
          career_page_content: careerPage,
          meta_content: metaContent,
          job_postings: jobPostings,
          page_items: groupedItems
        },
        message: "Career page data fetched successfully",
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

module.exports = new CareerPageWebController();