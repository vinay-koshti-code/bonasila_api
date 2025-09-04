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
 *         page_title:
 *           type: string
 *           example: "Page Not Found"
 *         page_description:
 *           type: string
 *           example: "The page you are looking for does not exist"
 *         page_link:
 *           type: string
 *           example: "/home"
 *         page_link_title:
 *           type: string
 *           example: "Go to Home"
 *         image:
 *           type: string
 *           example: "https://bucket.s3.region.amazonaws.com/uploads/pages/404-image.jpg"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *         deleted_on:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time

 *
 * /v1/admin/404:
 *   get:
 *     summary: Get 404 page content
 *     tags: [Admin - 404 Page Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update 404 page content
 *     tags: [Admin - 404 Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               page_title:
 *                 type: string
 *                 example: "Page Not Found"
 *               page_description:
 *                 type: string
 *                 example: "The page you are looking for does not exist"
 *               page_link:
 *                 type: string
 *                 example: "/home"
 *               page_link_title:
 *                 type: string
 *                 example: "Go to Home"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "404 page image upload"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
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
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/404/status:
 *   patch:
 *     summary: Toggle 404 page status
 *     tags: [Admin - 404 Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: 404 page status updated successfully
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
 *                   example: "404 page status updated to active"
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/404page:
 *   get:
 *     summary: Get 404 page data for public access
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: 404 page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     page_content:
 *                       $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */