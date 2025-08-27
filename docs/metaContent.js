/**
 * @swagger
 * components:
 *   schemas:
 *     MetaContent:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           example: 1
 *         page_slug:
 *           type: string
 *           maxLength: 100
 *           example: "home-page"
 *           description: "Unique slug for the page"
 *         page_name:
 *           type: string
 *           maxLength: 255
 *           example: "Home Page"
 *           description: "Display name of the page"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *           description: "0=inactive, 1=active"
 *         title:
 *           type: string
 *           maxLength: 255
 *           example: "Welcome to Bonasila - Premium Plant Pots"
 *           description: "SEO title tag"
 *         keywords:
 *           type: string
 *           example: "plant pots, terracotta, ceramic, garden, planters"
 *           description: "SEO meta keywords"
 *         description:
 *           type: string
 *           example: "Discover premium quality plant pots and planters for your garden"
 *           description: "SEO meta description"
 *         header_script:
 *           type: string
 *           example: "<script>console.log('Page loaded');</script>"
 *           description: "Custom scripts to be included in page header"
 *         created_on:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *         updated_on:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *
 *     CreateMetaContent:
 *       type: object
 *       required:
 *         - page_slug
 *         - page_name
 *       properties:
 *         page_slug:
 *           type: string
 *           maxLength: 100
 *           pattern: "^[a-z0-9-]+$"
 *           example: "about-us"
 *           description: "Unique slug (lowercase alphanumeric with dashes only)"
 *         page_name:
 *           type: string
 *           maxLength: 255
 *           example: "About Us"
 *           description: "Display name of the page"
 *         title:
 *           type: string
 *           maxLength: 255
 *           example: "About Bonasila - Our Story"
 *           description: "SEO title tag"
 *         keywords:
 *           type: string
 *           example: "about bonasila, company history, plant pot manufacturer"
 *           description: "SEO meta keywords"
 *         description:
 *           type: string
 *           example: "Learn about Bonasila's journey in creating premium plant pots"
 *           description: "SEO meta description"
 *         header_script:
 *           type: string
 *           example: "<script>gtag('config', 'GA_MEASUREMENT_ID');</script>"
 *           description: "Custom scripts to be included in page header"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/meta:
 *   get:
 *     summary: Get all meta content records with pagination and filtering
 *     tags: [Admin - Meta Content Management]
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
 *         name: page_name
 *         schema:
 *           type: string
 *         description: Search by page name
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, page_slug, page_name, status, created_on]
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
 *                   example: "Meta Content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No meta content records found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No Meta Content found"
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
 *     summary: Create a new meta content record
 *     tags: [Admin - Meta Content Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateMetaContent'
 *           examples:
 *             home_page:
 *               summary: Home Page Meta Content
 *               value:
 *                 page_slug: "home-page"
 *                 page_name: "Home Page"
 *                 title: "Welcome to Bonasila - Premium Plant Pots"
 *                 keywords: "plant pots, terracotta, ceramic, garden, planters"
 *                 description: "Discover premium quality plant pots and planters for your garden"
 *                 header_script: "<script>gtag('config', 'GA_MEASUREMENT_ID');</script>"
 *                 status: 1
 *             product_page:
 *               summary: Product Page Meta Content
 *               value:
 *                 page_slug: "products"
 *                 page_name: "Products"
 *                 title: "Our Plant Pot Collection - Bonasila"
 *                 keywords: "plant pot collection, ceramic pots, terracotta planters"
 *                 description: "Browse our extensive collection of premium plant pots and planters"
 *                 status: 1
 *     responses:
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
 *       400:
 *         description: Validation error or creation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                   description: Validation errors
 *                 message:
 *                   type: string
 *                   example: "Meta Content not created"
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
 * /v1/admin/meta/{id}:
 *   get:
 *     summary: Get meta content record by ID
 *     tags: [Admin - Meta Content Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Meta content record ID
 *     responses:
 *       200:
 *         description: Meta content record fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/MetaContent'
 *                 message:
 *                   type: string
 *                   example: "Meta Content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Meta content record not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Meta Content not found"
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
 *     summary: Update meta content record
 *     tags: [Admin - Meta Content Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Meta content record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page_slug:
 *                 type: string
 *                 maxLength: 100
 *                 pattern: "^[a-z0-9-]+$"
 *                 example: "updated-slug"
 *               page_name:
 *                 type: string
 *                 maxLength: 255
 *                 example: "Updated Page Name"
 *               title:
 *                 type: string
 *                 maxLength: 255
 *                 example: "Updated SEO Title"
 *               keywords:
 *                 type: string
 *                 example: "updated, keywords, seo"
 *               description:
 *                 type: string
 *                 example: "Updated meta description"
 *               header_script:
 *                 type: string
 *                 example: "<script>console.log('Updated script');</script>"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *           example:
 *             title: "Updated Home Page Title - Bonasila"
 *             description: "Updated description for better SEO"
 *             keywords: "updated keywords, plant pots, premium planters"
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
 *       404:
 *         description: Meta content record not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Meta Content not found"
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
 *                   type: array
 *                   items:
 *                     type: object
 *                   description: Validation errors
 *                 message:
 *                   type: string
 *                   example: "Meta Content update failed"
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
 * /v1/admin/meta/status/{id}:
 *   patch:
 *     summary: Toggle meta content record status
 *     tags: [Admin - Meta Content Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Meta content record ID
 *     responses:
 *       200:
 *         description: Meta content status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Meta Content status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Meta content record not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Meta Content not found"
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
