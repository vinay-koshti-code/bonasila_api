/**
 * @swagger
 * components:
 *   schemas:
 *     ThankYouPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single thank you page record"
 *         title:
 *           type: string
 *           example: "Thank You for Contacting Bonasila!"
 *           description: "Thank you page title message"
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
 * /v1/admin/thankyou-page:
 *   get:
 *     summary: Get thank you page content
 *     tags: [Admin - Thank you Page Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Thank you page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Thank you page content not found"
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
 *     summary: Create or update thank you page content
 *     tags: [Admin - Thank you Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Creates thank you page content if it doesn't exist, or updates existing content. Only one thank you page record is maintained.
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
 *                 example: "Thank You for Your Interest in Bonasila!"
 *                 description: "Thank you page title message"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *                 description: "0=inactive, 1=active"
 *           examples:
 *             contact_thank_you:
 *               summary: Contact Form Thank You
 *               value:
 *                 title: "Thank You for Contacting Us!"
 *                 status: 1
 *             newsletter_thank_you:
 *               summary: Newsletter Subscription Thank You
 *               value:
 *                 title: "Thank You for Subscribing to Our Newsletter!"
 *                 status: 1
 *             career_thank_you:
 *               summary: Career Application Thank You
 *               value:
 *                 title: "Thank You for Your Job Application!"
 *                 status: 1
 *             general_thank_you:
 *               summary: General Thank You Message
 *               value:
 *                 title: "Thank You for Choosing Bonasila!"
 *                 status: 1
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
 * /v1/admin/thankyou-page/status:
 *   patch:
 *     summary: Toggle thank you page status
 *     tags: [Admin - Thank you Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Toggles the thank you page status between active (1) and inactive (0)
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
 *         description: Thank you page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Thank you page content not found"
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
