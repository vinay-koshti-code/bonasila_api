/**
 * @swagger
 * /v1/admin/pressrelease-section:
 *   get:
 *     summary: Get press release section
 *     tags: [Admin - Press Release Section Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Press release section retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PressReleaseSection'
 *                 message:
 *                   type: string
 *                   example: "Press release section fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update press release section
 *     tags: [Admin - Press Release Section Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tag_line
 *               - header_description
 *             properties:
 *               tag_line:
 *                 type: string
 *                 example: "Latest News & Updates"
 *               header_description:
 *                 type: string
 *                 example: "Stay updated with the latest news and announcements from Bonasila"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: Press release section updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PressReleaseSection'
 *                 message:
 *                   type: string
 *                   example: "Press release section updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Press release section created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PressReleaseSection'
 *                 message:
 *                   type: string
 *                   example: "Press release section created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/pressrelease-section/status:
 *   patch:
 *     summary: Toggle press release section status
 *     tags: [Admin - Press Release Section Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Press release section status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */