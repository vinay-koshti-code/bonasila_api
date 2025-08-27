/**
 * @swagger
 * components:
 *   schemas:
 *     AboutPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single about page record"
 *         tag_line:
 *           type: string
 *           example: "Crafting Excellence Since 1995"
 *           description: "About page tagline"
 *         header:
 *           type: string
 *           example: "About Bonasila"
 *           description: "Main header for about page"
 *         sub_header:
 *           type: string
 *           example: "Premium Plant Pot Manufacturers"
 *           description: "Sub header text"
 *         header_image:
 *           type: string
 *           example: "uploads/about/about-header.jpg"
 *           description: "Header background image"
 *         title:
 *           type: string
 *           example: "Our Story"
 *           description: "Content section title"
 *         description:
 *           type: string
 *           example: "Founded with a passion for creating beautiful plant pots, Bonasila has been serving plant lovers worldwide with premium quality products."
 *           description: "About page main content"
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
 *     UpdateAboutPage:
 *       type: object
 *       properties:
 *         tag_line:
 *           type: string
 *           example: "Excellence in Every Pot"
 *         header:
 *           type: string
 *           example: "About Our Company"
 *         sub_header:
 *           type: string
 *           example: "Handcrafted Plant Pots with Love"
 *         header_image:
 *           type: string
 *           example: "uploads/about/company-story.jpg"
 *         title:
 *           type: string
 *           example: "Our Journey"
 *         description:
 *           type: string
 *           example: "From humble beginnings to becoming a trusted name in plant pot manufacturing, our journey has been driven by quality and customer satisfaction."
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *
 * /v1/admin/about-page:
 *   get:
 *     summary: Get about page content
 *     tags: [Admin - About Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: About page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AboutPage'
 *                 message:
 *                   type: string
 *                   example: "About page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: About page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About page content not found"
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
 *     summary: Create or update about page content
 *     tags: [Admin - About Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Creates about page content if it doesn't exist, or updates existing content. Only one about page record is maintained.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateAboutPage'
 *           examples:
 *             complete_about_page:
 *               summary: Complete About Page Content
 *               value:
 *                 tag_line: "Crafting Excellence Since 1995"
 *                 header: "About Bonasila"
 *                 sub_header: "Premium Plant Pot Manufacturers"
 *                 header_image: "uploads/about/about-header.jpg"
 *                 title: "Our Story"
 *                 description: "Founded with a passion for creating beautiful plant pots, Bonasila has been serving plant lovers worldwide with premium quality products crafted with traditional techniques and modern innovation."
 *                 status: 1
 *             minimal_about_page:
 *               summary: Minimal About Page Update
 *               value:
 *                 header: "About Us"
 *                 title: "Our Mission"
 *                 description: "Creating beautiful homes for your plants."
 *     responses:
 *       200:
 *         description: About page content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AboutPage'
 *                 message:
 *                   type: string
 *                   example: "About page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: About page content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AboutPage'
 *                 message:
 *                   type: string
 *                   example: "About page content created successfully"
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
 * /v1/admin/about-page/status:
 *   patch:
 *     summary: Toggle about page status
 *     tags: [Admin - About Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Toggles the about page status between active (1) and inactive (0)
 *     responses:
 *       200:
 *         description: About page status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: About page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About page content not found"
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
