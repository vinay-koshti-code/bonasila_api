/**
 * @swagger
 * components:
 *   schemas:
 *     CataloguesPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single catalogues page record"
 *         form_title:
 *           type: string
 *           example: "Request Our Product Catalogue"
 *           description: "Title for the catalogue request form"
 *         pdf_title:
 *           type: string
 *           example: "Download Digital Catalogue"
 *           description: "Title for the PDF download section"
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
 *         deleted_on:
 *           type: string
 *           format: date-time
 *           nullable: true
 *
 * /v1/admin/catalogues-page:
 *   get:
 *     summary: Get catalogues page content
 *     tags: [Admin - Catalogues Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Catalogues page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/CataloguesPage'
 *                 message:
 *                   type: string
 *                   example: "Catalogues page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Catalogues page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Catalogues page content not found"
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
 *     summary: Create or update catalogues page content
 *     tags: [Admin - Catalogues Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Creates catalogues page content if it doesn't exist, or updates existing content. Only one catalogues page record is maintained.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               form_title:
 *                 type: string
 *                 example: "Get Our Latest Catalogue"
 *                 description: "Title for the catalogue request form"
 *               pdf_title:
 *                 type: string
 *                 example: "Browse Our Digital Catalogue"
 *                 description: "Title for the PDF download section"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *                 description: "0=inactive, 1=active"
 *           examples:
 *             complete_catalogues_page:
 *               summary: Complete Catalogues Page Content
 *               value:
 *                 form_title: "Request Our Product Catalogue"
 *                 pdf_title: "Download Digital Catalogue"
 *                 status: 1
 *             updated_catalogues_page:
 *               summary: Updated Catalogues Page Content
 *               value:
 *                 form_title: "Get Our 2024 Product Catalogue"
 *                 pdf_title: "Instant PDF Download Available"
 *                 status: 1
 *             minimal_catalogues_page:
 *               summary: Minimal Catalogues Page Update
 *               value:
 *                 form_title: "Request Catalogue"
 *                 pdf_title: "Download PDF"
 *     responses:
 *       200:
 *         description: Catalogues page content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/CataloguesPage'
 *                 message:
 *                   type: string
 *                   example: "Catalogues page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Catalogues page content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/CataloguesPage'
 *                 message:
 *                   type: string
 *                   example: "Catalogues page content created successfully"
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
 * /v1/admin/catalogues-page/status:
 *   patch:
 *     summary: Toggle catalogues page status
 *     tags: [Admin - Catalogues Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Toggles the catalogues page status between active (1) and inactive (0)
 *     responses:
 *       200:
 *         description: Catalogues page status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Catalogues page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Catalogues page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Catalogues page content not found"
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
