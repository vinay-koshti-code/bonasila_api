/**
 * @swagger
 * components:
 *   schemas:
 *     AlliancePage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single alliance page record"
 *         description:
 *           type: string
 *           example: "Join our network of partners and grow your business with Bonasila's premium plant pot collection."
 *           description: "Main page description"
 *         header_image:
 *           type: string
 *           example: "uploads/alliance/alliance-header.jpg"
 *           description: "Header background image"
 *         header_title:
 *           type: string
 *           example: "Partner with Bonasila"
 *           description: "Main header title"
 *         alliance_title:
 *           type: string
 *           example: "Strategic Partnerships"
 *           description: "Alliance section title"
 *         form_title:
 *           type: string
 *           example: "Join Our Partner Network"
 *           description: "Partnership form title"
 *         form_footer_content:
 *           type: string
 *           example: "Our team will review your application and get back to you within 48 hours."
 *           description: "Form footer text"
 *         finishes_title:
 *           type: string
 *           example: "Premium Finishes"
 *           description: "Finishes section title"
 *         finishes_subtitle:
 *           type: string
 *           example: "Quality That Speaks"
 *           description: "Finishes section subtitle"
 *         finishes_content:
 *           type: string
 *           example: "Our extensive range of finishes ensures there's a perfect pot for every customer preference."
 *           description: "Finishes section content"
 *         finishes_link_title:
 *           type: string
 *           example: "View All Finishes"
 *           description: "Finishes section link text"
 *         finishes_link_url:
 *           type: string
 *           example: "/finishes"
 *           description: "Finishes section link URL"
 *         list_header:
 *           type: string
 *           example: "Partnership Benefits"
 *           description: "Benefits list header"
 *         list_content:
 *           type: string
 *           example: "Discover the advantages of partnering with Bonasila and how we can help grow your business."
 *           description: "Benefits list content"
 *         list_title:
 *           type: string
 *           example: "Why Choose Bonasila"
 *           description: "Benefits list title"
 *         ffactor_header:
 *           type: string
 *           example: "The F-Factor Advantage"
 *           description: "F-Factor section header"
 *         ffactor_content:
 *           type: string
 *           example: "Our unique F-Factor methodology ensures consistent quality and innovative designs across all our products."
 *           description: "F-Factor section content"
 *         ffactor_link_title:
 *           type: string
 *           example: "Learn About F-Factor"
 *           description: "F-Factor section link text"
 *         ffactor_link_url:
 *           type: string
 *           example: "/f-factor"
 *           description: "F-Factor section link URL"
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
 *     UpdateAlliancePage:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *           example: "Build a successful partnership with Bonasila and offer your customers the finest plant pots in the market."
 *         header_image:
 *           type: string
 *           example: "uploads/alliance/partnership-banner.jpg"
 *         header_title:
 *           type: string
 *           example: "Grow Together with Bonasila"
 *         alliance_title:
 *           type: string
 *           example: "Partnership Opportunities"
 *         form_title:
 *           type: string
 *           example: "Become a Partner Today"
 *         form_footer_content:
 *           type: string
 *           example: "Fill out the form below and our partnership team will contact you to discuss opportunities."
 *         finishes_title:
 *           type: string
 *           example: "Artisan Finishes"
 *         finishes_subtitle:
 *           type: string
 *           example: "Crafted to Perfection"
 *         finishes_content:
 *           type: string
 *           example: "Each finish is carefully applied by skilled artisans, ensuring every pot meets our high standards."
 *         finishes_link_title:
 *           type: string
 *           example: "Explore Finishes"
 *         finishes_link_url:
 *           type: string
 *           example: "/product-finishes"
 *         list_header:
 *           type: string
 *           example: "Partner Advantages"
 *         list_content:
 *           type: string
 *           example: "Join our growing network of successful partners and benefit from our proven business model."
 *         list_title:
 *           type: string
 *           example: "Partnership Benefits"
 *         ffactor_header:
 *           type: string
 *           example: "F-Factor Excellence"
 *         ffactor_content:
 *           type: string
 *           example: "Our proprietary F-Factor process guarantees superior quality and customer satisfaction."
 *         ffactor_link_title:
 *           type: string
 *           example: "Discover F-Factor"
 *         ffactor_link_url:
 *           type: string
 *           example: "/f-factor-process"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *
 * /v1/admin/alliance-page:
 *   get:
 *     summary: Get alliance page content
 *     tags: [Admin - AlliancePage Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Alliance page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AlliancePage'
 *                 message:
 *                   type: string
 *                   example: "Alliances page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Alliance page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Alliances page content not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 *   post:
 *     summary: Create or update alliance page content
 *     tags: [Admin - AlliancePage Management]
 *     security:
 *       - bearerAuth: []
 *     description: Creates alliance page content if it doesn't exist, or updates existing content. Only one alliance page record is maintained.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateAlliancePage'
 *           examples:
 *             complete_alliance_page:
 *               summary: Complete Alliance Page Content
 *               value:
 *                 description: "Join our network of partners and grow your business with Bonasila's premium plant pot collection."
 *                 header_image: "uploads/alliance/partnership-header.jpg"
 *                 header_title: "Partner with Bonasila"
 *                 alliance_title: "Strategic Partnerships"
 *                 form_title: "Join Our Partner Network"
 *                 form_footer_content: "Our team will review your application and get back to you within 48 hours."
 *                 finishes_title: "Premium Finishes"
 *                 finishes_subtitle: "Quality That Speaks"
 *                 finishes_content: "Our extensive range of finishes ensures there's a perfect pot for every customer preference."
 *                 finishes_link_title: "View All Finishes"
 *                 finishes_link_url: "/finishes"
 *                 list_header: "Partnership Benefits"
 *                 list_content: "Discover the advantages of partnering with Bonasila."
 *                 list_title: "Why Choose Bonasila"
 *                 ffactor_header: "The F-Factor Advantage"
 *                 ffactor_content: "Our unique F-Factor methodology ensures consistent quality."
 *                 ffactor_link_title: "Learn About F-Factor"
 *                 ffactor_link_url: "/f-factor"
 *                 status: 1
 *             minimal_alliance_page:
 *               summary: Minimal Alliance Page Update
 *               value:
 *                 header_title: "Partnership Opportunities"
 *                 form_title: "Become a Partner"
 *                 alliance_title: "Join Our Network"
 *     responses:
 *       200:
 *         description: Alliance page content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AlliancePage'
 *                 message:
 *                   type: string
 *                   example: "Alliances page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Alliance page content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AlliancePage'
 *                 message:
 *                   type: string
 *                   example: "Alliances page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                   description: Validation errors
 *                 message:
 *                   type: string
 *                   example: "Validation failed"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 * /v1/admin/alliance-page/status:
 *   patch:
 *     summary: Toggle alliance page status
 *     tags: [Admin - AlliancePage Management]
 *     security:
 *       - bearerAuth: []
 *     description: Toggles the alliance page status between active (1) and inactive (0)
 *     responses:
 *       200:
 *         description: Alliance page status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Alliances page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Alliance page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Alliances page content not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 */
