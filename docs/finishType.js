/**
 * @swagger
 * components:
 *   schemas:
 *     ProductFinishType:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "Matte Finish"
 *         content:
 *           type: string
 *           example: "A smooth matte finish that provides excellent durability"
 *         video_title:
 *           type: string
 *           example: "Matte Finish Application Process"
 *         video_url:
 *           type: string
 *           example: "uploads/finishes/video-1234567890.mp4"
 *         video_image:
 *           type: string
 *           example: "uploads/finishes/video_image-1234567890.jpg"
 *         long_title:
 *           type: string
 *           example: "Premium Matte Finish - Professional Grade"
 *         status:
 *           type: integer
 *           enum: [0, 1, 2]
 *           example: 1
 *           description: "0=inactive, 1=active, 2=deleted"
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
 *     CreateProductFinishType:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - video_title
 *         - video_url
 *         - long_title
 *       properties:
 *         title:
 *           type: string
 *           example: "Glossy Finish"
 *         content:
 *           type: string
 *           example: "High-gloss finish for premium appearance"
 *         video_title:
 *           type: string
 *           example: "Glossy Finish Demo"
 *         video_url:
 *           type: string
 *           format: uri
 *           example: "https://example.com/videos/glossy-finish.mp4"
 *         long_title:
 *           type: string
 *           example: "Premium Glossy Finish - High Quality"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 * 
 * /v1/admin/finish-type:
 *   get:
 *     summary: Get all product finish types with pagination
 *     tags: [Admin - FinishType Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1]
 *         description: Filter by status (0=inactive, 1=active)
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search by title
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, title, status, created_on]
 *         description: Sort field
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Product finish types fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProductFinishType'
 *                 message:
 *                   type: string
 *                   example: "Product Finish Types fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No finish types found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No Product Finish Types found"
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
 *     summary: Create a new product finish type
 *     tags: [Admin - FinishType Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - video_title
 *               - long_title
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               video_title:
 *                 type: string
 *               long_title:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               video_image:
 *                 type: string
 *                 format: binary
 *                 description: "Video thumbnail image"
 *               video_file:
 *                 type: string
 *                 format: binary
 *                 description: "Video file (mp4, mov, avi, webm)"
 *     responses:
 *       201:
 *         description: Product finish type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductFinishType'
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error or creation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: object
 *                   description: Validation errors by field
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type not created"
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
 * /v1/admin/finish-type/{id}:
 *   get:
 *     summary: Get product finish type by ID
 *     tags: [Admin - FinishType Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product finish type fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductFinishType'
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type not found"
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
 *   put:
 *     summary: Update product finish type
 *     tags: [Admin - FinishType Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               video_title:
 *                 type: string
 *               long_title:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               video_image:
 *                 type: string
 *                 format: binary
 *                 description: "Video thumbnail image"
 *               video_file:
 *                 type: string
 *                 format: binary
 *                 description: "Video file (mp4, mov, avi, webm)"
 *     responses:
 *       200:
 *         description: Product finish type updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductFinishType'
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Update failed or validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: object
 *                   description: Validation errors by field
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type update failed"
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
 *   delete:
 *     summary: Delete product finish type (soft delete)
 *     tags: [Admin - FinishType Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product finish type deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type not found"
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
 * /v1/admin/finish-type/status/{id}:
 *   patch:
 *     summary: Toggle product finish type status
 *     tags: [Admin - FinishType Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product finish type status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish Type not found"
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
