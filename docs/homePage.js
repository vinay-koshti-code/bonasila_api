/**
 * @swagger
 * /v1/admin/home-page:
 *   get:
 *     summary: Get homepage content
 *     tags: [Admin - Home Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Homepage content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/HomePage'
 *                 message:
 *                   type: string
 *                   example: "Homepage content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update homepage content
 *     tags: [Admin - Home Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               slide_title:
 *                 type: string
 *                 example: "Welcome to Bonasila"
 *               slide_image:
 *                 type: string
 *                 format: binary
 *                 description: "Homepage slide image"
 *               pushup_link:
 *                 type: string
 *                 example: "/products"
 *               pushup_link_title:
 *                 type: string
 *                 example: "View Products"
 *               pushup_header:
 *                 type: string
 *                 example: "Premium Plant Pots"
 *               pushup_description:
 *                 type: string
 *                 example: "Discover our collection"
 *               pushup_description_1:
 *                 type: string
 *                 example: "Quality craftsmanship"
 *               pushup_link_1:
 *                 type: string
 *                 example: "/about"
 *               pushup_link_title_1:
 *                 type: string
 *                 example: "Learn More"
 *               pushup_description_2:
 *                 type: string
 *                 example: "Sustainable materials"
 *               video_file_autoplay:
 *                 type: string
 *                 format: binary
 *                 description: "Homepage autoplay video file"
 *               plant_lover_title:
 *                 type: string
 *                 example: "For Plant Lovers"
 *               plant_lover_content:
 *                 type: string
 *                 example: "Transform your space"
 *               slider_title:
 *                 type: string
 *                 example: "Featured Collection"
 *               slider_content:
 *                 type: string
 *                 example: "Explore our latest designs"
 *               slider_footer_title:
 *                 type: string
 *                 example: "Get Started"
 *               slider_footer_content:
 *                 type: string
 *                 example: "Browse our catalog"
 *               client_title:
 *                 type: string
 *                 example: "Our Clients"
 *               client_image:
 *                 type: string
 *                 format: binary
 *                 description: "Client showcase image"
 *               client_image_alt:
 *                 type: string
 *                 example: "Client testimonials"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: Homepage content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/HomePage'
 *                 message:
 *                   type: string
 *                   example: "Homepage content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Homepage content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/HomePage'
 *                 message:
 *                   type: string
 *                   example: "Homepage content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/homepage:
 *   get:
 *     summary: Get homepage data for public access
 *     tags: [Web API - Homepage]
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
 *                       properties:
 *                         plant_lover_steps:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/PageListItem'
 *                         brand:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/PageListItem'
 *                         product:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/PageListItem'
 *                         name_list:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/PageListItem'
 *                         slider:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/PageListItem'
 *                         client_list:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/PageListItem'
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
 */