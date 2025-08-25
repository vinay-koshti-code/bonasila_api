/**
 * @swagger
 * components:
 *   schemas:
 *     ProductFinish:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "Glossy Wood Finish"
 *         image:
 *           type: string
 *           example: "glossy-wood-finish.jpg"
 *         finishes_type_id:
 *           type: integer
 *           example: 1
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
 *         Product_finish_type:
 *           $ref: '#/components/schemas/ProductFinishType'
 *     
 *     CreateProductFinish:
 *       type: object
 *       required:
 *         - title
 *         - image
 *         - finishes_type_id
 *       properties:
 *         title:
 *           type: string
 *           example: "Matte Wood Finish"
 *         image:
 *           type: string
 *           example: "matte-wood-finish.jpg"
 *         finishes_type_id:
 *           type: integer
 *           example: 1
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *     
 *     UpdateProductFinish:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Updated Finish Name"
 *         image:
 *           type: string
 *           example: "updated-finish.jpg"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 * 
 * /v1/admin/product-finishes:
 *   get:
 *     summary: Get all product finishes with pagination
 *     tags: [Admin - Product Finishes]
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
 *         name: finishes_type_id
 *         schema:
 *           type: integer
 *         description: Filter by finish type ID
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
 *         description: Product finishes fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProductFinish'
 *                 message:
 *                   type: string
 *                   example: "Product Finishes fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No product finishes found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No Product Finishes found"
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
 *     summary: Create a new product finish
 *     tags: [Admin - Product Finishes]
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
 *               - finishes_type_id
 *             properties:
 *               title:
 *                 type: string
 *               finishes_type_id:
 *                 type: integer
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Finish image file"
 *     responses:
 *       201:
 *         description: Product finish created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductFinish'
 *                 message:
 *                   type: string
 *                   example: "Product Finish created successfully"
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
 *                   example: "Product Finish not created"
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
 * /v1/admin/product-finishes/{id}:
 *   get:
 *     summary: Get product finish by ID
 *     tags: [Admin - Product Finishes]
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
 *         description: Product finish fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductFinish'
 *                 message:
 *                   type: string
 *                   example: "Product Finish fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish not found"
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
 *     summary: Update product finish
 *     tags: [Admin - Product Finishes]
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
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Finish image file (optional)"
 *     responses:
 *       200:
 *         description: Product finish updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductFinish'
 *                 message:
 *                   type: string
 *                   example: "Product Finish updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish not found"
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
 *                   example: "Product Finish update failed"
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
 *     summary: Delete product finish (soft delete)
 *     tags: [Admin - Product Finishes]
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
 *         description: Product finish deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish not found"
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
 * /v1/admin/product-finishes/status/{id}:
 *   patch:
 *     summary: Toggle product finish status
 *     tags: [Admin - Product Finishes]
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
 *         description: Product finish status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product finish not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Finish not found"
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