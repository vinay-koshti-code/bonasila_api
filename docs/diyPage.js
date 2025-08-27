/**
 * @swagger
 * components:
 *   schemas:
 *     DIYPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single DIY page record"
 *         tag_line:
 *           type: string
 *           example: "Do It Yourself - Creative Plant Pot Projects"
 *           description: "DIY page tagline"
 *         video_file:
 *           type: string
 *           example: "uploads/diy/tutorial-video.mp4"
 *           description: "Main tutorial video file"
 *         bottom_title_link:
 *           type: string
 *           example: "/diy-tutorials"
 *           description: "Bottom section title link"
 *         bottom_title:
 *           type: string
 *           example: "More DIY Projects"
 *           description: "Bottom section title"
 *         bottom_allow_files:
 *           type: string
 *           example: "true"
 *           description: "Allow file uploads in bottom section"
 *         bottom_info:
 *           type: string
 *           example: "Share your own DIY creations with our community"
 *           description: "Bottom section information"
 *         bottom_content:
 *           type: string
 *           example: "Upload photos of your DIY plant pot projects and inspire others"
 *           description: "Bottom section content"
 *         popup_title:
 *           type: string
 *           example: "DIY Tips & Tricks"
 *           description: "Popup modal title"
 *         popup_content:
 *           type: string
 *           example: "Get expert tips for your DIY plant pot projects"
 *           description: "Popup modal content"
 *         popup_file:
 *           type: string
 *           example: "uploads/diy/tips-guide.pdf"
 *           description: "Popup downloadable file"
 *         footer_text:
 *           type: string
 *           example: "Join our DIY community and share your creativity"
 *           description: "Footer section text"
 *         list_footer:
 *           type: string
 *           example: "Happy Crafting!"
 *           description: "List section footer"
 *         list_header:
 *           type: string
 *           example: "Popular DIY Projects"
 *           description: "List section header"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *           description: "0=inactive, 1=active"
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *
 * /v1/admin/diy-page:
 *   get:
 *     summary: Get DIY page content
 *     tags: [Admin - DIY Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: DIY page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/DIYPage'
 *                 message:
 *                   type: string
 *                   example: "DIY page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: DIY page content not found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update DIY page content
 *     tags: [Admin - DIY Page Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tag_line:
 *                 type: string
 *                 example: "Creative DIY Plant Pot Ideas"
 *               video_file:
 *                 type: string
 *                 example: "uploads/diy/how-to-decorate-pots.mp4"
 *               bottom_title_link:
 *                 type: string
 *                 example: "/diy-gallery"
 *               bottom_title:
 *                 type: string
 *                 example: "DIY Gallery"
 *               bottom_allow_files:
 *                 type: string
 *                 example: "true"
 *               bottom_info:
 *                 type: string
 *                 example: "Upload your DIY creations and get featured"
 *               bottom_content:
 *                 type: string
 *                 example: "Show off your creativity and inspire other plant lovers"
 *               popup_title:
 *                 type: string
 *                 example: "Free DIY Guide"
 *               popup_content:
 *                 type: string
 *                 example: "Download our comprehensive DIY plant pot guide"
 *               popup_file:
 *                 type: string
 *                 example: "uploads/diy/complete-guide.pdf"
 *               footer_text:
 *                 type: string
 *                 example: "Transform ordinary pots into extraordinary pieces"
 *               list_footer:
 *                 type: string
 *                 example: "Keep Creating!"
 *               list_header:
 *                 type: string
 *                 example: "Featured DIY Projects"
 *     responses:
 *       200:
 *         description: Content updated successfully
 *       201:
 *         description: Content created successfully
 *       500:
 *         description: Server error
 *
 * /v1/admin/diy-page/status:
 *   patch:
 *     summary: Toggle DIY page status
 *     tags: [Admin - DIY Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       404:
 *         description: Page content not found
 *       500:
 *         description: Server error
 */
