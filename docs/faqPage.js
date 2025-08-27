/**
 * @swagger
 * components:
 *   schemas:
 *     FAQPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: FAQ page ID (always 1 - singleton)
 *           example: 1
 *         tag_line:
 *           type: string
 *           description: FAQ page tagline
 *           example: "Your Questions Answered"
 *         faq_title:
 *           type: string
 *           description: Main FAQ section title
 *           example: "Frequently Asked Questions"
 *         form_title:
 *           type: string
 *           description: Contact form title
 *           example: "Still Have Questions?"
 *         form_submit_text:
 *           type: string
 *           description: Form submit button text
 *           example: "Send Message"
 *         form_footer_text:
 *           type: string
 *           description: Footer text below contact form
 *           example: "We'll get back to you within 24 hours"
 *         description:
 *           type: string
 *           description: FAQ page description content
 *           example: "Find answers to common questions about our plant pots and services"
 *         status:
 *           type: integer
 *           description: Page status (0=inactive, 1=active)
 *           example: 1
 *         created_on:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updated_on:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *
 *     FAQPageInput:
 *       type: object
 *       properties:
 *         tag_line:
 *           type: string
 *           description: FAQ page tagline
 *           example: "Your Questions Answered"
 *         faq_title:
 *           type: string
 *           description: Main FAQ section title
 *           example: "Frequently Asked Questions"
 *         form_title:
 *           type: string
 *           description: Contact form title
 *           example: "Still Have Questions?"
 *         form_submit_text:
 *           type: string
 *           description: Form submit button text
 *           example: "Send Message"
 *         form_footer_text:
 *           type: string
 *           description: Footer text below contact form
 *           example: "We'll get back to you within 24 hours"
 *         description:
 *           type: string
 *           description: FAQ page description content
 *           example: "Find answers to common questions about our plant pots and services"
 *         status:
 *           type: integer
 *           minimum: 0
 *           maximum: 1
 *           description: Page status (0=inactive, 1=active)
 *           example: 1
 *
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /v1/admin/faq-page:
 *   get:
 *     summary: Get FAQ page content
 *     description: Retrieve the FAQ page content (singleton record with ID=1)
 *     tags: [FAQ Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: FAQ page content retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FAQPage'
 *                 message:
 *                   type: string
 *                   example: "FAQ page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: FAQ page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "FAQ page content not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     summary: Create or update FAQ page content
 *     description: Create FAQ page content if it doesn't exist, or update existing content (singleton pattern)
 *     tags: [FAQ Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FAQPageInput'
 *           example:
 *             tag_line: "Your Questions Answered"
 *             faq_title: "Frequently Asked Questions"
 *             form_title: "Still Have Questions?"
 *             form_submit_text: "Send Message"
 *             form_footer_text: "We'll get back to you within 24 hours"
 *             description: "Find answers to common questions about our plant pots and services"
 *             status: 1
 *     responses:
 *       200:
 *         description: FAQ page content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FAQPage'
 *                 message:
 *                   type: string
 *                   example: "FAQ page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: FAQ page content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FAQPage'
 *                 message:
 *                   type: string
 *                   example: "FAQ page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /v1/admin/faq-page/status:
 *   patch:
 *     summary: Toggle FAQ page status
 *     description: Toggle FAQ page status between active (1) and inactive (0)
 *     tags: [FAQ Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: FAQ page status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "FAQ page status updated to active"
 *       404:
 *         description: FAQ page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "FAQ page content not found"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 */
