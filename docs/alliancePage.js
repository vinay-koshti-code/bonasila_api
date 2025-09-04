/**
 * @swagger
 * /v1/admin/alliance-page:
 *   get:
 *     summary: Get alliance page content
 *     tags: [Admin - Alliance Page Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update alliance page content
 *     tags: [Admin - Alliance Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: "Join our network of partners"
 *               header_image:
 *                 type: string
 *                 format: binary
 *               header_title:
 *                 type: string
 *                 example: "Partner with Bonasila"
 *               alliance_title:
 *                 type: string
 *                 example: "Strategic Partnerships"
 *               form_title:
 *                 type: string
 *                 example: "Join Our Partner Network"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
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
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/alliance-page/status:
 *   patch:
 *     summary: Toggle alliance page status
 *     tags: [Admin - Alliance Page Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */