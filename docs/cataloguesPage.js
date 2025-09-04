/**
 * @swagger
 * /v1/admin/catalogues-page:
 *   get:
 *     summary: Get catalogues page content
 *     tags: [Admin - Catalogues Page Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update catalogues page content
 *     tags: [Admin - Catalogues Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               form_title:
 *                 type: string
 *                 example: "Request Our Product Catalogue"
 *               pdf_title:
 *                 type: string
 *                 example: "Download Digital Catalogue"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
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
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/catalogues-page/status:
 *   patch:
 *     summary: Toggle catalogues page status
 *     tags: [Admin - Catalogues Page Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */