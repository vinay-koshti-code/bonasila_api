/**
 * @swagger
 * components:
 *   schemas:
 *     BeyondBoundaryPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single beyond boundary page record"
 *         tag_line:
 *           type: string
 *           example: "Beyond Boundaries, Beyond Expectations"
 *           description: "Page tagline"
 *         footer_text:
 *           type: string
 *           example: "Pushing the limits of design and functionality in every pot we create."
 *           description: "Footer section text"
 *         video_autoplay:
 *           type: string
 *           example: "uploads/beyond-boundary/autoplay-video.mp4"
 *           description: "Autoplay video file path"
 *         header_image:
 *           type: string
 *           example: "uploads/beyond-boundary/header-bg.jpg"
 *           description: "Header background image"
 *         footer_pincode_title:
 *           type: string
 *           example: "Delivery Across India"
 *           description: "Pincode section title"
 *         footer_pincode_text:
 *           type: string
 *           example: "Enter your pincode to check delivery availability in your area."
 *           description: "Pincode section description"
 *         footer_pincode_video:
 *           type: string
 *           example: "uploads/beyond-boundary/delivery-video.mp4"
 *           description: "Pincode section video"
 *         list_header:
 *           type: string
 *           example: "Innovation Features"
 *           description: "Features list header"
 *         list_footer:
 *           type: string
 *           example: "Experience the difference with Bonasila"
 *           description: "Features list footer"
 *         description:
 *           type: string
 *           example: "At Bonasila, we constantly push beyond conventional boundaries to create plant pots that redefine excellence."
 *           description: "Main page description"
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
 * /v1/admin/beyondboundaries-page:
 *   get:
 *     summary: Get beyond boundary page content
 *     tags: [Admin - BeyondBoundary Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Beyond boundary page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/BeyondBoundaryPage'
 *                 message:
 *                   type: string
 *                   example: "Beyond Boundary page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Beyond boundary page content not found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update beyond boundary page content
 *     tags: [Admin - BeyondBoundary Page Management]
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
 *                 example: "Innovation Without Limits"
 *               footer_text:
 *                 type: string
 *                 example: "Redefining what's possible in plant pot design"
 *               video_autoplay:
 *                 type: string
 *                 example: "uploads/beyond-boundary/innovation-video.mp4"
 *               header_image:
 *                 type: string
 *                 example: "uploads/beyond-boundary/innovation-header.jpg"
 *               footer_pincode_title:
 *                 type: string
 *                 example: "Check Delivery"
 *               footer_pincode_text:
 *                 type: string
 *                 example: "We deliver innovation to your doorstep"
 *               footer_pincode_video:
 *                 type: string
 *                 example: "uploads/beyond-boundary/delivery.mp4"
 *               list_header:
 *                 type: string
 *                 example: "Revolutionary Features"
 *               list_footer:
 *                 type: string
 *                 example: "The future of plant pots is here"
 *               description:
 *                 type: string
 *                 example: "Discover how we're revolutionizing the plant pot industry"
 *     responses:
 *       200:
 *         description: Content updated successfully
 *       201:
 *         description: Content created successfully
 *       500:
 *         description: Server error
 *
 * /v1/admin/beyondboundaries-page/status:
 *   patch:
 *     summary: Toggle beyond boundary page status
 *     tags: [Admin - BeyondBoundary Page Management]
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
