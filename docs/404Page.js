/**
 * @swagger
 * components:
 *   schemas:
 *     FourOFourPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single 404 page record"
 *         page_title:
 *           type: string
 *           example: "Page Not Found"
 *           description: "Main title displayed on 404 page"
 *         page_description:
 *           type: string
 *           example: "Sorry, the page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL."
 *           description: "Description text explaining the 404 error"
 *         page_link:
 *           type: string
 *           example: "/"
 *           description: "URL to redirect users (usually homepage)"
 *         page_link_title:
 *           type: string
 *           example: "Go Back Home"
 *           description: "Text for the redirect link button"
 *         image:
 *           type: string
 *           example: "uploads/404/not-found-illustration.jpg"
 *           description: "Image displayed on 404 page"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *           description: "0=inactive, 1=active"
 *         created_on:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *         updated_on:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *
 *     UpdateFourOFourPage:
 *       type: object
 *       properties:
 *         page_title:
 *           type: string
 *           example: "Oops! Page Not Found"
 *           description: "Main title displayed on 404 page"
 *         page_description:
 *           type: string
 *           example: "The page you're looking for doesn't exist. Let's get you back on track with our beautiful plant pots collection."
 *           description: "Description text explaining the 404 error"
 *         page_link:
 *           type: string
 *           example: "/collections"
 *           description: "URL to redirect users"
 *         page_link_title:
 *           type: string
 *           example: "Browse Our Collections"
 *           description: "Text for the redirect link button"
 *         image:
 *           type: string
 *           example: "uploads/404/broken-pot-illustration.jpg"
 *           description: "Image displayed on 404 page"
 *
 * /v1/admin/404/:
 *   get:
 *     summary: Get 404 page content
 *     tags: [Admin - 404 Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 404 page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: 404 page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "404 page content not found"
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
 *     summary: Create or update 404 page content
 *     tags: [Admin - 404 Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Creates 404 page content if it doesn't exist, or updates existing content. Only one 404 page record is maintained.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateFourOFourPage'
 *           examples:
 *             complete_404_page:
 *               summary: Complete 404 Page Content
 *               value:
 *                 page_title: "Page Not Found"
 *                 page_description: "Sorry, the page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL."
 *                 page_link: "/"
 *                 page_link_title: "Return to Homepage"
 *                 image: "uploads/404/not-found-bonasila.jpg"
 *             custom_404_page:
 *               summary: Custom 404 Page with Brand Message
 *               value:
 *                 page_title: "Lost Among the Pots?"
 *                 page_description: "Looks like this page has been repotted elsewhere! Don't worry, we'll help you find what you're looking for."
 *                 page_link: "/collections"
 *                 page_link_title: "Explore Our Plant Pots"
 *                 image: "uploads/404/lost-pot-illustration.jpg"
 *             minimal_404_page:
 *               summary: Minimal 404 Page Update
 *               value:
 *                 page_title: "404 - Not Found"
 *                 page_link: "/"
 *                 page_link_title: "Go Home"
 *     responses:
 *       200:
 *         description: 404 page content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: 404 page content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page content created successfully"
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
 * /v1/admin/404/status:
 *   patch:
 *     summary: Toggle 404 page status
 *     tags: [Admin - 404 Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Toggles the 404 page status between active (1) and inactive (0)
 *     responses:
 *       200:
 *         description: 404 page status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "404 page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: 404 page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "404 page content not found"
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
