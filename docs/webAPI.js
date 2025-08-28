/**
 * @swagger
 * components:
 *   schemas:
 *     PageItems:
 *       type: object
 *       properties:
 *         plant_lover_steps:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PageItem'
 *         brand:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PageItem'
 *         product:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PageItem'
 *         name_list:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PageItem'
 *         slider:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PageItem'
 *         client_list:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PageItem'
 *
 *     PageItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         file:
 *           type: string
 *         image_alt:
 *           type: string
 *         link_url:
 *           type: string
 *         order_no:
 *           type: integer
 *
 * /v1/web/homepage:
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
 *                       type: object
 *                     page_items:
 *                       $ref: '#/components/schemas/PageItems'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *
 * /v1/web/aboutpage:
 *   get:
 *     summary: Get about page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: About page data fetched successfully
 *
 * /v1/web/404page:
 *   get:
 *     summary: Get 404 page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: 404 page data fetched successfully
 *
 * /v1/web/beyondboundariespage:
 *   get:
 *     summary: Get beyond boundaries page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Beyond boundaries page data fetched successfully
 *
 * /v1/web/careerpage:
 *   get:
 *     summary: Get career page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Career page data fetched successfully
 *
 * /v1/web/cataloguespage:
 *   get:
 *     summary: Get catalogues page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Catalogues page data fetched successfully
 *
 * /v1/web/diypage:
 *   get:
 *     summary: Get DIY page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: DIY page data fetched successfully
 *
 * /v1/web/faqpage:
 *   get:
 *     summary: Get FAQ page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: FAQ page data fetched successfully
 *
 * /v1/web/contactpage:
 *   get:
 *     summary: Get contact page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Contact page data fetched successfully
 *
 * /v1/web/ffactorpage:
 *   get:
 *     summary: Get F-Factor page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: F-Factor page data fetched successfully
 *
 * /v1/web/gallerypage:
 *   get:
 *     summary: Get gallery page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Gallery page data fetched successfully
 *
 * /v1/web/pressreleasepage:
 *   get:
 *     summary: Get press release page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Press release page data fetched successfully
 *
 * /v1/web/thankyoupage:
 *   get:
 *     summary: Get thank you page data
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: Thank you page data fetched successfully
 *
 * /v1/web/products:
 *   get:
 *     summary: Get all products
 *     tags: [Web API - Products]
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
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       productMedia:
 *                         type: array
 *                       prices:
 *                         type: array
 *                       collection:
 *                         type: object
 *
 * /v1/web/products/{id}:
 *   get:
 *     summary: Get single product
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
 *       404:
 *         description: Product not found
 *
 * /v1/web/collections:
 *   get:
 *     summary: Get all collections
 *     tags: [Web API - Collections]
 *     responses:
 *       200:
 *         description: Collections fetched successfully
 *
 * /v1/web/collections/{id}:
 *   get:
 *     summary: Get single collection
 *     tags: [Web API - Collections]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Collection fetched successfully
 *       404:
 *         description: Collection not found
 */