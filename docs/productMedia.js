/**
 * @swagger
 * components:
 *   schemas:
 *     ProductMedia:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         product_id:
 *           type: integer
 *           example: 1
 *         type:
 *           type: string
 *           enum: [image, video]
 *           example: "image"
 *         path:
 *           type: string
 *           example: "uploads/media/file-1234567890-123456789.jpg"
 *         alt_text:
 *           type: string
 *           example: "Product image description"
 *         order:
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
 *         product:
 *           $ref: '#/components/schemas/Product'
 *     
 *     CreateProductMedia:
 *       type: object
 *       required:
 *         - product_id
 *         - file
 *       properties:
 *         product_id:
 *           type: integer
 *           example: 1
 *         alt_text:
 *           type: string
 *           example: "Product image description"
 *         order:
 *           type: integer
 *           example: 1
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *         file:
 *           type: string
 *           format: binary
 *           description: "Image or video file (max 50MB)"
 *     
 *     UpdateProductMedia:
 *       type: object
 *       properties:
 *         alt_text:
 *           type: string
 *           example: "Updated image description"
 *         order:
 *           type: integer
 *           example: 2
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *         file:
 *           type: string
 *           format: binary
 *           description: "New image or video file (optional)"
 * 
 * /v1/admin/product-media:
 *   post:
 *     summary: Create new product media with file upload
 *     tags: [Admin - Product Media Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - product_id
 *               - file
 *             properties:
 *               product_id:
 *                 type: integer
 *                 example: 1
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: "Image or video file (jpeg, jpg, png, gif, mp4, mov, avi, webm - max 50MB). Type is auto-detected."
 *               alt_text:
 *                 type: string
 *                 example: "Product image description"
 *               order:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       201:
 *         description: Product media created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductMedia'
 *                 message:
 *                   type: string
 *                   example: "Product Media created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: File required or validation error
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 * 
 * /v1/admin/product-media/{product_id}:
 *   get:
 *     summary: Get all media for a specific product
 *     tags: [Admin - Product Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID to get media for
 *     responses:
 *       200:
 *         description: Product media fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProductMedia'
 *                 message:
 *                   type: string
 *                   example: "Product Media fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No Product Media found for this product
 *       500:
 *         description: Server error
 * 
 * /v1/admin/product-media/{id}:
 *   put:
 *     summary: Update product media by media ID
 *     tags: [Admin - Product Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product Media ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: "New image or video file (optional)"
 *               alt_text:
 *                 type: string
 *                 example: "Updated image description"
 *               order:
 *                 type: integer
 *                 example: 2
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Product media updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductMedia'
 *                 message:
 *                   type: string
 *                   example: "Product Media updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product media not found
 *       400:
 *         description: Update failed
 *       500:
 *         description: Server error
 * 
 *   delete:
 *     summary: Delete product media by media ID (soft delete and remove file)
 *     tags: [Admin - Product Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product Media ID
 *     responses:
 *       200:
 *         description: Product media deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Media deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product media not found
 *       500:
 *         description: Server error
 * 
 * /v1/admin/product-media/status/{id}:
 *   patch:
 *     summary: Toggle product media status
 *     tags: [Admin - Product Media Management]
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
 *         description: Product media status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Media status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product media not found
 *       500:
 *         description: Server error
 */
