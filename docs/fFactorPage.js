/**
 * @swagger
 * components:
 *   schemas:
 *     FFactorPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single F-Factor page record"
 *         tag_line:
 *           type: string
 *           example: "The F-Factor Difference"
 *           description: "Page tagline"
 *         header:
 *           type: string
 *           example: "F-Factor Excellence"
 *           description: "Main header text"
 *         header_image:
 *           type: string
 *           example: "uploads/ffactor/header-bg.jpg"
 *           description: "Header background image"
 *         header_title:
 *           type: string
 *           example: "Discover the F-Factor"
 *           description: "Header section title"
 *         header_description:
 *           type: string
 *           example: "Our proprietary F-Factor methodology ensures every plant pot meets the highest standards of quality and design."
 *           description: "Header section description"
 *         perffection_title:
 *           type: string
 *           example: "Perfection in Every Detail"
 *           description: "Perfection section title"
 *         perffection_subtitle:
 *           type: string
 *           example: "Crafted to Last"
 *           description: "Perfection section subtitle"
 *         perffection_content:
 *           type: string
 *           example: "The F-Factor represents our commitment to perfection, from material selection to final finishing."
 *           description: "Perfection section content"
 *         perffection_video:
 *           type: string
 *           example: "uploads/ffactor/perfection-process.mp4"
 *           description: "Perfection section video"
 *         about_title:
 *           type: string
 *           example: "About F-Factor"
 *           description: "About section title"
 *         about_subtitle:
 *           type: string
 *           example: "Our Quality Promise"
 *           description: "About section subtitle"
 *         about_content:
 *           type: string
 *           example: "F-Factor is more than a process - it's our philosophy of creating products that exceed expectations."
 *           description: "About section content"
 *         about_footer_title:
 *           type: string
 *           example: "Quality Guaranteed"
 *           description: "About section footer title"
 *         footer_title:
 *           type: string
 *           example: "Experience F-Factor"
 *           description: "Footer section title"
 *         footer_subtitle:
 *           type: string
 *           example: "See the Difference"
 *           description: "Footer section subtitle"
 *         footer_content:
 *           type: string
 *           example: "Every Bonasila product carries the F-Factor seal of excellence."
 *           description: "Footer section content"
 *         footer_video:
 *           type: string
 *           example: "uploads/ffactor/showcase-video.mp4"
 *           description: "Footer section video"
 *         footer_link:
 *           type: string
 *           example: "/products"
 *           description: "Footer section link URL"
 *         footer_link_title:
 *           type: string
 *           example: "Shop F-Factor Products"
 *           description: "Footer section link text"
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
 * /v1/admin/ffactor-page:
 *   get:
 *     summary: Get F-Factor page content
 *     tags: [Admin - FFactor Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: F-Factor page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FFactorPage'
 *                 message:
 *                   type: string
 *                   example: "FFactor page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: F-Factor page content not found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update F-Factor page content
 *     tags: [Admin - FFactor Page Management]
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
 *                 example: "The F-Factor Advantage"
 *               header:
 *                 type: string
 *                 example: "F-Factor Quality"
 *               header_image:
 *                 type: string
 *                 example: "uploads/ffactor/quality-header.jpg"
 *               header_title:
 *                 type: string
 *                 example: "Unmatched Quality Standards"
 *               header_description:
 *                 type: string
 *                 example: "Our F-Factor process ensures every product meets exceptional quality standards"
 *               perffection_title:
 *                 type: string
 *                 example: "Pursuit of Perfection"
 *               perffection_subtitle:
 *                 type: string
 *                 example: "Every Detail Matters"
 *               perffection_content:
 *                 type: string
 *                 example: "From design to delivery, F-Factor guides every step of our process"
 *               perffection_video:
 *                 type: string
 *                 example: "uploads/ffactor/process-video.mp4"
 *               about_title:
 *                 type: string
 *                 example: "What is F-Factor?"
 *               about_subtitle:
 *                 type: string
 *                 example: "Our Methodology"
 *               about_content:
 *                 type: string
 *                 example: "F-Factor represents our systematic approach to excellence"
 *               about_footer_title:
 *                 type: string
 *                 example: "Proven Results"
 *               footer_title:
 *                 type: string
 *                 example: "Ready to Experience F-Factor?"
 *               footer_subtitle:
 *                 type: string
 *                 example: "Quality You Can Trust"
 *               footer_content:
 *                 type: string
 *                 example: "Join thousands of satisfied customers who trust F-Factor quality"
 *               footer_video:
 *                 type: string
 *                 example: "uploads/ffactor/testimonials.mp4"
 *               footer_link:
 *                 type: string
 *                 example: "/shop"
 *               footer_link_title:
 *                 type: string
 *                 example: "Shop Now"
 *     responses:
 *       200:
 *         description: Content updated successfully
 *       201:
 *         description: Content created successfully
 *       500:
 *         description: Server error
 *
 * /v1/admin/ffactor-page/status:
 *   patch:
 *     summary: Toggle F-Factor page status
 *     tags: [Admin - FFactor Page Management]
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
