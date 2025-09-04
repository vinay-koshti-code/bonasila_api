/**
 * @swagger
 * /v1/admin/faq-page:
 *   get:
 *     summary: Get FAQ page content
 *     tags: [Admin - FAQ Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: FAQ page content fetched successfully
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update FAQ page content
 *     tags: [Admin - FAQ Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tag_line:
 *                 type: string
 *                 example: "Your Questions Answered"
 *               faq_title:
 *                 type: string
 *                 example: "Frequently Asked Questions"
 *               form_title:
 *                 type: string
 *                 example: "Still Have Questions?"
 *               form_submit_text:
 *                 type: string
 *                 example: "Send Message"
 *               form_footer_text:
 *                 type: string
 *                 example: "We'll get back to you within 24 hours"
 *               description:
 *                 type: string
 *                 example: "Find answers to common questions about our plant pots"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
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
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/faq-page/status:
 *   patch:
 *     summary: Toggle FAQ page status
 *     tags: [Admin - FAQ Page Management]
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
 *                 message:
 *                   type: string
 *                   example: "FAQ page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */