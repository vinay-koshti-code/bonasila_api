/**
 * @swagger
 * components:
 *   schemas:
 *     MetaContent:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         page_slug:
 *           type: string
 *           example: "home"
 *         page_name:
 *           type: string
 *           example: "Home Page"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *         title:
 *           type: string
 *           example: "Home - Bonasila"
 *         keywords:
 *           type: string
 *           example: "home, bonasila, products"
 *         description:
 *           type: string
 *           example: "Welcome to Bonasila home page"
 *         header_script:
 *           type: string
 *           example: "<script>console.log('home');</script>"
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
 * /v1/admin/meta:
 *   get:
 *     summary: Get all meta content records
 *     tags: [Admin Management - Meta Content]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1]
 *       - in: query
 *         name: page_name
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, page_slug, page_name, status, created_on]
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *     responses:
 *       200:
 *         description: Meta content records fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MetaContent'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: No meta content found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update meta content
 *     tags: [Admin Management - Meta Content]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - page_slug
 *               - page_name
 *             properties:
 *               page_slug:
 *                 type: string
 *                 example: "home"
 *               page_name:
 *                 type: string
 *                 example: "Home Page"
 *               title:
 *                 type: string
 *                 example: "Home - Bonasila"
 *               keywords:
 *                 type: string
 *                 example: "home, bonasila, products"
 *               description:
 *                 type: string
 *                 example: "Welcome to Bonasila home page"
 *               header_script:
 *                 type: string
 *                 example: "<script>console.log('home');</script>"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: Meta content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/MetaContent'
 *                 message:
 *                   type: string
 *                   example: "Meta Content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Meta content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/MetaContent'
 *                 message:
 *                   type: string
 *                   example: "Meta Content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Server error
 *
 * /v1/admin/meta/{id}:
 *   get:
 *     summary: Get meta content by ID
 *     tags: [Admin Management - Meta Content]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Meta content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/MetaContent'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: Meta content not found
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete meta content
 *     tags: [Admin Management - Meta Content]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Meta content deleted successfully
 *       404:
 *         description: Meta content not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/meta/status/{id}:
 *   patch:
 *     summary: Toggle meta content status
 *     tags: [Admin Management - Meta Content]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Meta content status updated successfully
 *       404:
 *         description: Meta content not found
 *       500:
 *         description: Server error
 */