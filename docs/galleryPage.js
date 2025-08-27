/**
 * @swagger
 * components:
 *   schemas:
 *     GalleryPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         file:
 *           type: string
 *           example: "uploads/gallery/beautiful-ceramic-pots.jpg"
 *           description: "Gallery image or media file"
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
 *     CreateGalleryPage:
 *       type: object
 *       required:
 *         - file
 *       properties:
 *         file:
 *           type: string
 *           example: "uploads/gallery/terracotta-collection.jpg"
 *           description: "Gallery image or media file path"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/gallery-page:
 *   get:
 *     summary: Get all gallery items with pagination and filtering
 *     tags: [Admin - Gallery Page Management]
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
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, created_on, status]
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
 *         description: Gallery items fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/GalleryPage'
 *                 message:
 *                   type: string
 *                   example: "Gallery items fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No gallery items found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create a new gallery item
 *     tags: [Admin - Gallery Page Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateGalleryPage'
 *           examples:
 *             product_showcase:
 *               summary: Product Showcase Image
 *               value:
 *                 file: "uploads/gallery/product-showcase-1.jpg"
 *                 status: 1
 *             ceramic_collection:
 *               summary: Ceramic Collection
 *               value:
 *                 file: "uploads/gallery/ceramic-pots-display.jpg"
 *                 status: 1
 *             customer_setup:
 *               summary: Customer Plant Setup
 *               value:
 *                 file: "uploads/gallery/customer-garden-setup.jpg"
 *                 status: 1
 *     responses:
 *       201:
 *         description: Gallery item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/GalleryPage'
 *                 message:
 *                   type: string
 *                   example: "Gallery item created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error or creation failed
 *       500:
 *         description: Server error
 *
 * /v1/admin/gallery-page/{id}:
 *   get:
 *     summary: Get gallery item by ID
 *     tags: [Admin - Gallery Page Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Gallery item ID
 *     responses:
 *       200:
 *         description: Gallery item fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/GalleryPage'
 *                 message:
 *                   type: string
 *                   example: "Gallery item fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Gallery item not found
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update gallery item
 *     tags: [Admin - Gallery Page Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Gallery item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 example: "uploads/gallery/updated-image.jpg"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Gallery item updated successfully
 *       404:
 *         description: Gallery item not found
 *       400:
 *         description: Update failed
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete gallery item (soft delete)
 *     tags: [Admin - Gallery Page Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Gallery item ID
 *     responses:
 *       200:
 *         description: Gallery item deleted successfully
 *       404:
 *         description: Gallery item not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/gallery-page/status/{id}:
 *   patch:
 *     summary: Toggle gallery item status
 *     tags: [Admin - Gallery Page Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Gallery item ID
 *     responses:
 *       200:
 *         description: Gallery item status updated successfully
 *       404:
 *         description: Gallery item not found
 *       500:
 *         description: Server error
 */
