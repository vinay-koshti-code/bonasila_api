/**
 * @swagger
 * components:
 *   schemas:
 *     ProductPrice:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         product_id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Standard Size"
 *         a_size:
 *           type: string
 *           example: "10"
 *         b_size:
 *           type: string
 *           example: "15"
 *         c_size:
 *           type: string
 *           example: "20"
 *         d_size:
 *           type: string
 *           example: "25"
 *         h_size:
 *           type: string
 *           example: "30"
 *         price_in_inr:
 *           type: number
 *           format: decimal
 *           example: 1500.50
 *         price_in_usd:
 *           type: number
 *           format: decimal
 *           example: 18.25
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
 *         Product:
 *           $ref: '#/components/schemas/Product'
 *     
 *     CreateProductPrice:
 *       type: object
 *       required:
 *         - product_id
 *         - name
 *         - a_size
 *         - b_size
 *         - c_size
 *         - d_size
 *         - h_size
 *         - price_in_inr
 *         - price_in_usd
 *       properties:
 *         product_id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Standard Size"
 *         a_size:
 *           type: string
 *           example: "10"
 *         b_size:
 *           type: string
 *           example: "15"
 *         c_size:
 *           type: string
 *           example: "20"
 *         d_size:
 *           type: string
 *           example: "25"
 *         h_size:
 *           type: string
 *           example: "30"
 *         price_in_inr:
 *           type: number
 *           minimum: 0
 *           example: 1500.50
 *         price_in_usd:
 *           type: number
 *           minimum: 0
 *           example: 18.25
 *     
 *     UpdateProductPrice:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Updated Size"
 *         a_size:
 *           type: string
 *           example: "12"
 *         b_size:
 *           type: string
 *           example: "17"
 *         c_size:
 *           type: string
 *           example: "22"
 *         d_size:
 *           type: string
 *           example: "27"
 *         h_size:
 *           type: string
 *           example: "32"
 *         price_in_inr:
 *           type: number
 *           minimum: 0
 *           example: 1600.75
 *         price_in_usd:
 *           type: number
 *           minimum: 0
 *           example: 19.50
 * 
 * /v1/admin/product-price/{id}:
 *   get:
 *     summary: Get product prices by product ID
 *     tags: [Admin - Product Prices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID to fetch prices for
 *     responses:
 *       200:
 *         description: Product prices fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProductPrice'
 *                 message:
 *                   type: string
 *                   example: "Product Prices fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product not found or no prices found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product not found"
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
 *     summary: Update product price
 *     tags: [Admin - Product Prices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product price ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProductPrice'
 *     responses:
 *       200:
 *         description: Product price updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductPrice'
 *                 message:
 *                   type: string
 *                   example: "Product Price updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product price not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Price not found"
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
 *                   example: "Product Price update failed"
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
 *     summary: Delete product price (soft delete)
 *     tags: [Admin - Product Prices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product price ID to delete
 *     responses:
 *       200:
 *         description: Product price deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Price deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Product price not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product Price not found"
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
 * /v1/admin/product-price:
 *   post:
 *     summary: Create a new product price
 *     tags: [Admin - Product Prices]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProductPrice'
 *     responses:
 *       201:
 *         description: Product price created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductPrice'
 *                 message:
 *                   type: string
 *                   example: "Product Price created successfully"
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
 *                   example: "Product Price not created"
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