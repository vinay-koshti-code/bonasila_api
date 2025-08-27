/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Premium Product"
 *         tag_line:
 *           type: string
 *           example: "Best quality product"
 *         listing_name:
 *           type: string
 *           example: "Premium Product Listing"
 *         slider_title:
 *           type: string
 *           example: "Featured Product"
 *         slider_description:
 *           type: string
 *           example: "This is a premium quality product"
 *         popup_title:
 *           type: string
 *           example: "Product Details"
 *         popup_content:
 *           type: string
 *           example: "Detailed product information"
 *         popup_image:
 *           type: string
 *           example: "popup-image.jpg"
 *         price_type:
 *           type: string
 *           example: "fixed"
 *         media:
 *           type: string
 *           example: "product-media.jpg"
 *         cover_image:
 *           type: string
 *           example: "cover-image.jpg"
 *         description:
 *           type: string
 *           example: "Product description"
 *         title:
 *           type: string
 *           example: "Product Title"
 *         collection_id:
 *           type: integer
 *           example: 1
 *         size_image:
 *           type: string
 *           example: "size-chart.jpg"
 *         status:
 *           type: integer
 *           enum: [0, 1, 2]
 *           example: 1
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *     
 *     CreateProduct:
 *       type: object
 *       required:
 *         - name
 *         - tag_line
 *         - listing_name
 *         - slider_title
 *         - slider_description
 *         - popup_title
 *         - popup_content
 *         - price_type
 *         - media
 *         - cover_image
 *         - description
 *         - title
 *         - collection_id
 *       properties:
 *         name:
 *           type: string
 *         tag_line:
 *           type: string
 *         listing_name:
 *           type: string
 *         slider_title:
 *           type: string
 *         slider_description:
 *           type: string
 *         popup_title:
 *           type: string
 *         popup_content:
 *           type: string
 *         popup_image:
 *           type: string
 *         price_type:
 *           type: string
 *         media:
 *           type: string
 *         cover_image:
 *           type: string
 *         description:
 *           type: string
 *         title:
 *           type: string
 *         collection_id:
 *           type: integer
 *         size_image:
 *           type: string
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 * 
 * /v1/admin/products:
 *   get:
 *     summary: Get all products with pagination
 *     tags: [Admin - Product Management]
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
 *         name: name
 *         schema:
 *           type: string
 *         description: Search by product name
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, name, status, created_on]
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
 *         description: Products fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 totalCount:
 *                   type: integer
 *                   example: 50
 *                 currentPage:
 *                   type: integer
 *                   example: 1
 *                 totalPages:
 *                   type: integer
 *                   example: 5
 *                 rowPerPage:
 *                   type: integer
 *                   example: 10
 *                 message:
 *                   type: string
 *                   example: "Products fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No Products found"
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
 *     summary: Create a new product
 *     tags: [Admin - Product Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - tag_line
 *               - listing_name
 *               - slider_title
 *               - slider_description
 *               - popup_title
 *               - popup_content
 *               - price_type
 *               - media
 *               - description
 *               - title
 *               - collection_id
 *             properties:
 *               name:
 *                 type: string
 *               tag_line:
 *                 type: string
 *               listing_name:
 *                 type: string
 *               slider_title:
 *                 type: string
 *               slider_description:
 *                 type: string
 *               popup_title:
 *                 type: string
 *               popup_content:
 *                 type: string
 *               popup_image_alt:
 *                 type: string
 *               price_type:
 *                 type: string
 *               media:
 *                 type: string
 *               description:
 *                 type: string
 *               title:
 *                 type: string
 *               collection_id:
 *                 type: integer
 *               menu_image_alt:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               cover_image:
 *                 type: string
 *                 format: binary
 *               size_image:
 *                 type: string
 *                 format: binary
 *               popup_image:
 *                 type: string
 *                 format: binary
 *               menu_image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *                 message:
 *                   type: string
 *                   example: "Product created successfully"
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
 *                   example: "Product not created"
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
 * /v1/admin/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Admin - Product Management]
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
 *         description: Product fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 * 
 *   put:
 *     summary: Update product
 *     tags: [Admin - Product Management]
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
 *               name:
 *                 type: string
 *               tag_line:
 *                 type: string
 *               listing_name:
 *                 type: string
 *               slider_title:
 *                 type: string
 *               slider_description:
 *                 type: string
 *               popup_title:
 *                 type: string
 *               popup_content:
 *                 type: string
 *               popup_image_alt:
 *                 type: string
 *               price_type:
 *                 type: string
 *               media:
 *                 type: string
 *               description:
 *                 type: string
 *               title:
 *                 type: string
 *               collection_id:
 *                 type: integer
 *               menu_image_alt:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *               cover_image:
 *                 type: string
 *                 format: binary
 *               size_image:
 *                 type: string
 *                 format: binary
 *               popup_image:
 *                 type: string
 *                 format: binary
 *               menu_image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: Product not found
 *       400:
 *         description: Update failed
 *       500:
 *         description: Server error
 * 
 *   delete:
 *     summary: Delete product (soft delete)
 *     tags: [Admin - Product Management]
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
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 * 
 * /v1/admin/products/status/{id}:
 *   patch:
 *     summary: Toggle product status
 *     tags: [Admin - Product Management]
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
 *         description: Product status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
