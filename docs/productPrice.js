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
 *           example: 5
 *           description: "ID of the associated product"
 *         name:
 *           type: string
 *           example: "Small Terracotta Pot"
 *         a_size:
 *           type: string
 *           example: "10cm"
 *           description: "Dimension A"
 *         b_size:
 *           type: string
 *           example: "8cm"
 *           description: "Dimension B"
 *         c_size:
 *           type: string
 *           example: "12cm"
 *           description: "Dimension C"
 *         d_size:
 *           type: string
 *           example: "15cm"
 *           description: "Dimension D"
 *         h_size:
 *           type: string
 *           example: "20cm"
 *           description: "Height dimension"
 *         price_in_inr:
 *           type: number
 *           format: float
 *           example: 299.99
 *         price_in_usd:
 *           type: number
 *           format: float
 *           example: 3.60
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
 *           example: 5
 *           description: "ID of the associated product"
 *         name:
 *           type: string
 *           example: "Medium Ceramic Planter"
 *         a_size:
 *           type: string
 *           example: "15cm"
 *         b_size:
 *           type: string
 *           example: "12cm"
 *         c_size:
 *           type: string
 *           example: "18cm"
 *         d_size:
 *           type: string
 *           example: "20cm"
 *         h_size:
 *           type: string
 *           example: "25cm"
 *         price_in_inr:
 *           type: number
 *           format: float
 *           example: 599.99
 *         price_in_usd:
 *           type: number
 *           format: float
 *           example: 7.20
 *
 * /v1/admin/product-price/{product_id}:
 *   get:
 *     summary: Get product prices by product ID
 *     tags: [Admin - Product Prices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: product_id
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
 *                   example: "No Product Prices found for this product"
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
 *
 * /v1/admin/product-price/{id}:
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
 *         description: Product price ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Product Name"
 *               a_size:
 *                 type: string
 *                 example: "16cm"
 *               b_size:
 *                 type: string
 *                 example: "14cm"
 *               c_size:
 *                 type: string
 *                 example: "19cm"
 *               d_size:
 *                 type: string
 *                 example: "22cm"
 *               h_size:
 *                 type: string
 *                 example: "28cm"
 *               price_in_inr:
 *                 type: number
 *                 format: float
 *                 example: 649.99
 *               price_in_usd:
 *                 type: number
 *                 format: float
 *                 example: 7.80
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
 *         description: Update failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *         description: Product price ID
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
 */