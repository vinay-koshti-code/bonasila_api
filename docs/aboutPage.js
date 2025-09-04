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
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update about page content
 *     tags: [Admin - About Page Management]
 *     security:
 *       - BearerAuth: []
 *     description: Creates about page content if it doesn't exist, or updates existing content. Only one about page record is maintained.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               tag_line:
 *                 type: string
 *                 example: "Crafting Excellence Since 1995"
 *               header:
 *                 type: string
 *                 example: "About Bonasila"
 *               sub_header:
 *                 type: string
 *                 example: "Premium Plant Pot Manufacturers"
 *               header_image:
 *                 type: string
 *                 format: binary
 *                 description: "About page header image"
 *               title:
 *                 type: string
 *                 example: "Our Story"
 *               description:
 *                 type: string
 *                 example: "Founded with a passion for creating beautiful plant pots..."
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
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
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/about-page/status:
 *   patch:
 *     summary: Toggle about page status
 *     tags: [Admin - About Page Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
