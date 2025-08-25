/**
 * @swagger
 * components:
 *   schemas:
 *     ProductCollection:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "Classic Collection"
 *         long_title:
 *           type: string
 *           example: "Timeless designs for every home"
 *         homepage_long_title:
 *           type: string
 *           example: "Explore our classic and timeless plant pots"
 *         homepage_short_description:
 *           type: string
 *           example: "A selection of our most popular and enduring designs, perfect for any decor style"
 *         description:
 *           type: string
 *           example: "This collection features our best-selling pots that blend seamlessly into any setting"
 *         content:
 *           type: string
 *           example: "Discover the durability and simple beauty of our terracotta, ceramic, and clay classic planters"
 *         collection_image:
 *           type: string
 *           example: "uploads/collections/collection_image-1234567890.jpg"
 *         banner_image:
 *           type: string
 *           example: "uploads/collections/banner_image-1234567890.jpg"
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
 *     CreateProductCollection:
 *       type: object
 *       required:
 *         - title
 *         - long_title
 *         - homepage_long_title
 *         - homepage_short_description
 *         - description
 *         - content
 *       properties:
 *         title:
 *           type: string
 *           example: "Modern Collection"
 *         long_title:
 *           type: string
 *           example: "Contemporary designs for modern living"
 *         homepage_long_title:
 *           type: string
 *           example: "Discover our modern and stylish plant collection"
 *         homepage_short_description:
 *           type: string
 *           example: "Sleek and contemporary planters for the modern home"
 *         description:
 *           type: string
 *           example: "A curated selection of modern planters with clean lines and minimalist aesthetics"
 *         content:
 *           type: string
 *           example: "Perfect for contemporary spaces, these planters combine functionality with modern design"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 * 
 * /v1/admin/product-collections:
 *   get:
 *     summary: Get all product collections with pagination
 *     tags: [Admin - Product Collections]
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
 *         description: Product collections fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProductCollection'
 *                 message:
 *                   type: string
 *                   example: "Product Collections fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No product collections found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No Product Collections found"
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
 *     summary: Create a new product collection
 *     tags: [Admin - Product Collections]
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
 *               - long_title
 *               - homepage_long_title
 *               - homepage_short_description
 *               - description
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               long_title:
 *                 type: string
 *               homepage_long_title:
 *                 type: string
 *               homepage_short_description:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               collection_image:
 *                 type: string
 *                 format: binary
 *                 description: "Collection main image"
 *               banner_image:
 *                 type: string
 *                 format: binary
 *                 description: "Collection banner image"
 *     responses:
 *       201:
 *         description: Product collection created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductCollection'
 *                 message:
 *                   type: string
 *                   example: "Product Collection created successfully"
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
 *                   example: "Product Collection not created"
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
 * /v1/admin/product-collections/{id}:
 *   get:
 *     summary: Get product collection by ID
 *     tags: [Admin - Product Collections]
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
 *         description: Product collection fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductCollection'
 *                 message:
 *                   type: string
 *                   example: "Product Collection fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product collection not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Collection not found"
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
 *     summary: Update product collection
 *     tags: [Admin - Product Collections]
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
 *               long_title:
 *                 type: string
 *               homepage_long_title:
 *                 type: string
 *               homepage_short_description:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               collection_image:
 *                 type: string
 *                 format: binary
 *                 description: "Collection main image (optional)"
 *               banner_image:
 *                 type: string
 *                 format: binary
 *                 description: "Collection banner image (optional)"
 *     responses:
 *       200:
 *         description: Product collection updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductCollection'
 *                 message:
 *                   type: string
 *                   example: "Product Collection updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product collection not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Collection not found"
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
 *                   example: "Product Collection update failed"
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
 *     summary: Delete product collection (soft delete)
 *     tags: [Admin - Product Collections]
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
 *         description: Product collection deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Collection deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product collection not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Collection not found"
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
 * /v1/admin/product-collections/status/{id}:
 *   patch:
 *     summary: Toggle product collection status
 *     tags: [Admin - Product Collections]
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
 *         description: Product collection status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Collection status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product collection not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Collection not found"
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