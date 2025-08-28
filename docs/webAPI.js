/**
 * @swagger
 * components:
 *   schemas:
 *     ContactRequest:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Contact request ID
 *           example: 1
 *         name:
 *           type: string
 *           description: Customer name
 *           example: "John Smith"
 *         email:
 *           type: string
 *           format: email
 *           description: Customer email address
 *           example: "john.smith@email.com"
 *         phone:
 *           type: string
 *           description: Customer phone number
 *           example: "+1-555-0123"
 *         company:
 *           type: string
 *           description: Customer company name
 *           example: "Garden Design Co."
 *         city:
 *           type: string
 *           description: Customer city
 *           example: "New York"
 *         message:
 *           type: string
 *           description: Customer inquiry message
 *           example: "Interested in bulk pricing for commercial planters"
 *         request_type:
 *           type: string
 *           description: Type of request
 *           example: "inquiry"
 *         file:
 *           type: string
 *           description: Uploaded file URL (auto-generated with IMG_URI prefix)
 *           example: "http://192.168.29.169:3000/uploads/contacts/file-1234567890.pdf"
 *         status:
 *           type: integer
 *           description: Request status (0=pending, 1=processed, 2=archived)
 *           example: 0
 *         created_on:
 *           type: string
 *           format: date-time
 *           description: Request creation timestamp
 *         updated_on:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *
 *     ContactRequestInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           description: Customer name
 *           example: "John Smith"
 *         email:
 *           type: string
 *           format: email
 *           description: Customer email address
 *           example: "john.smith@email.com"
 *         phone:
 *           type: string
 *           description: Customer phone number
 *           example: "+1-555-0123"
 *         company:
 *           type: string
 *           description: Customer company name
 *           example: "Garden Design Co."
 *         city:
 *           type: string
 *           description: Customer city
 *           example: "New York"
 *         message:
 *           type: string
 *           description: Customer inquiry message
 *           example: "Interested in bulk pricing for commercial planters"
 *         request_type:
 *           type: string
 *           description: Type of request
 *           example: "inquiry"
 *
 *     MetaContentPublic:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Meta content ID
 *           example: 1
 *         page_name:
 *           type: string
 *           description: Page display name
 *           example: "Home Page"
 *         page_slug:
 *           type: string
 *           description: Page URL slug
 *           example: "home"
 *         meta_title:
 *           type: string
 *           description: SEO meta title
 *           example: "Bonasila - Premium Plant Pots & Planters"
 *         meta_description:
 *           type: string
 *           description: SEO meta description
 *           example: "Discover premium plant pots and planters for your garden"
 *         meta_keywords:
 *           type: string
 *           description: SEO meta keywords
 *           example: "plant pots, planters, garden, outdoor, ceramic"
 *         og_title:
 *           type: string
 *           description: Open Graph title
 *           example: "Bonasila - Premium Plant Pots"
 *         og_description:
 *           type: string
 *           description: Open Graph description
 *           example: "Premium plant pots for modern gardens"
 *         og_image:
 *           type: string
 *           description: Open Graph image URL
 *           example: "https://example.com/images/og-home.jpg"
 *         status:
 *           type: integer
 *           description: Content status (0=inactive, 1=active)
 *           example: 1
 *         created_on:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updated_on:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 */

/**
 * @swagger
 * /v1/web/contact:
 *   post:
 *     summary: Submit contact request
 *     description: Submit a new contact request from website visitors (public endpoint)
 *     tags: [Web API]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *               - request_type
 *             properties:
 *               name:
 *                 type: string
 *                 description: Customer name
 *                 example: "John Smith"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Customer email address
 *                 example: "john.smith@email.com"
 *               phone:
 *                 type: string
 *                 description: Customer phone number
 *                 example: "+1-555-0123"
 *               company:
 *                 type: string
 *                 description: Customer company name
 *                 example: "Garden Design Co."
 *               city:
 *                 type: string
 *                 description: Customer city
 *                 example: "New York"
 *               message:
 *                 type: string
 *                 description: Customer inquiry message
 *                 example: "Interested in bulk pricing for commercial planters"
 *               request_type:
 *                 type: string
 *                 enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *                 description: Type of request
 *                 example: "inquiry"
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Optional file attachment (images, documents, etc.)
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactRequestInput'
 *           example:
 *             name: "John Smith"
 *             email: "john.smith@email.com"
 *             phone: "+1-555-0123"
 *             company: "Garden Design Co."
 *             message: "Interested in bulk pricing for commercial planters"
 *             request_type: "inquiry"
 *     responses:
 *       201:
 *         description: Contact request submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactRequest'
 *                 message:
 *                   type: string
 *                   example: "Request created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error or request creation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Request not created"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       422:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                         example: "email"
 *                       message:
 *                         type: string
 *                         example: "Invalid email format"
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /v1/web/meta/slug/{slug}:
 *   get:
 *     summary: Get meta content by page slug
 *     description: Retrieve SEO meta content for a specific page by its slug (public endpoint)
 *     tags: [Web API]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Page slug identifier
 *         example: "home"
 *     responses:
 *       200:
 *         description: Meta content retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/MetaContentPublic'
 *                 message:
 *                   type: string
 *                   example: "Meta Content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Meta content not found for the specified slug
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
 *         description: Internal server error
 */
