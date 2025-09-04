/**
 * @swagger
 * /v1/web/meta/slug/{slug}:
 *   get:
 *     summary: Get meta content by slug
 *     tags: [Web API - Meta Content]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: "home"
 *     responses:
 *       200:
 *         description: Meta content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/MetaContent'
 *                 message:
 *                   type: string
 *                   example: "Meta content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/contact:
 *   post:
 *     summary: Submit contact form
 *     tags: [Web API - Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - request_type
 *             properties:
 *               request_type:
 *                 type: string
 *                 enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *                 example: "contact_request"
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *               city:
 *                 type: string
 *                 example: "New York"
 *               company:
 *                 type: string
 *                 example: "ABC Corp"
 *               message:
 *                 type: string
 *                 example: "I would like to know more about your products"
 *               file:
 *                 type: string
 *                 format: binary
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
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/homepage:
 *   get:
 *     summary: Get homepage data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Homepage data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     homepage_content:
 *                       $ref: '#/components/schemas/HomePage'
 *                     meta_content:
 *                       $ref: '#/components/schemas/MetaContent'
 *                     page_items:
 *                       type: object
 *                 message:
 *                   type: string
 *                   example: "Homepage data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/aboutpage:
 *   get:
 *     summary: Get about page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: About page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     about_content:
 *                       $ref: '#/components/schemas/AboutPage'
 *                     meta_content:
 *                       $ref: '#/components/schemas/MetaContent'
 *                     page_items:
 *                       type: object
 *                 message:
 *                   type: string
 *                   example: "About page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/404page:
 *   get:
 *     summary: Get 404 page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: 404 page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: "404 page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/beyondboundariespage:
 *   get:
 *     summary: Get beyond boundaries page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Beyond boundaries page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: "Beyond boundaries page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/careerpage:
 *   get:
 *     summary: Get career page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Career page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: "Career page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/cataloguespage:
 *   get:
 *     summary: Get catalogues page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Catalogues page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/CataloguesPage'
 *                 message:
 *                   type: string
 *                   example: "Catalogues page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/diypage:
 *   get:
 *     summary: Get DIY page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: DIY page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/DIYPage'
 *                 message:
 *                   type: string
 *                   example: "DIY page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/faqpage:
 *   get:
 *     summary: Get FAQ page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: FAQ page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FAQPage'
 *                 message:
 *                   type: string
 *                   example: "FAQ page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/contactpage:
 *   get:
 *     summary: Get contact page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Contact page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactPage'
 *                 message:
 *                   type: string
 *                   example: "Contact page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/ffactorpage:
 *   get:
 *     summary: Get F-Factor page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: F-Factor page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FFactorPage'
 *                 message:
 *                   type: string
 *                   example: "F-Factor page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/gallerypage:
 *   get:
 *     summary: Get gallery page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Gallery page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     gallery_pages:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/GalleryPage'
 *                     page_items:
 *                       type: object
 *                 message:
 *                   type: string
 *                   example: "Gallery page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/pressreleasepage:
 *   get:
 *     summary: Get press release page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Press release page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/PressReleasePage'
 *                 message:
 *                   type: string
 *                   example: "Press release page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/thankyoupage:
 *   get:
 *     summary: Get thank you page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Thank you page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ThankYouPage'
 *                 message:
 *                   type: string
 *                   example: "Thank you page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/products:
 *   get:
 *     summary: Get all products
 *     tags: [Web API - Products]
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
 *         name: collection_id
 *         schema:
 *           type: integer
 *         description: Filter by collection ID
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by product name
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
 *                 message:
 *                   type: string
 *                   example: "Products fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Web API - Products]
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
 *                   example: "Product fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/collections:
 *   get:
 *     summary: Get all product collections
 *     tags: [Web API - Pages]
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
 *     responses:
 *       200:
 *         description: Collections fetched successfully
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
 *                   example: "Collections fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/page/collections/{id}:
 *   get:
 *     summary: Get collection by ID
 *     tags: [Web API - Pages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Collection fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProductCollection'
 *                 message:
 *                   type: string
 *                   example: "Collection fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/videosection:
 *   get:
 *     summary: Get video section data
 *     tags: [Web API - Gallery]
 *     responses:
 *       200:
 *         description: Video section data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/GallerySection'
 *                 message:
 *                   type: string
 *                   example: "Video section data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */