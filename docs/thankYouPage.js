/**
 * @swagger
 * /v1/admin/thankyou-page:
 *   get:
 *     summary: Get thank you page content
 *     tags: [Admin - Thank You Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Thank you page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ThankYouPage'
 *                 message:
 *                   type: string
 *                   example: "Thank you page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update thank you page content
 *     tags: [Admin - Thank You Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Thank You for Contacting Bonasila!"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: Thank you page content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ThankYouPage'
 *                 message:
 *                   type: string
 *                   example: "Thank you page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Thank you page content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ThankYouPage'
 *                 message:
 *                   type: string
 *                   example: "Thank you page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/thankyou-page/status:
 *   patch:
 *     summary: Toggle thank you page status
 *     tags: [Admin - Thank You Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Thank you page status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Thank you page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */