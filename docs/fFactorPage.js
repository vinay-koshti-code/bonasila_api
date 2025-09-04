/**
 * @swagger
 * /v1/admin/ffactor-page:
 *   get:
 *     summary: Get F-Factor page content
 *     tags: [Admin - F-Factor Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: F-Factor page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FFactorPage'
 *                 message:
 *                   type: string
 *                   example: "FFactor page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update F-Factor page content
 *     tags: [Admin - F-Factor Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               tag_line:
 *                 type: string
 *                 example: "The F-Factor Difference"
 *               header:
 *                 type: string
 *                 example: "F-Factor Excellence"
 *               header_image:
 *                 type: string
 *                 format: binary
 *               header_title:
 *                 type: string
 *                 example: "Discover the F-Factor"
 *               header_description:
 *                 type: string
 *                 example: "Our proprietary F-Factor methodology"
 *               perffection_title:
 *                 type: string
 *                 example: "Perfection in Every Detail"
 *               perffection_subtitle:
 *                 type: string
 *                 example: "Crafted to Last"
 *               perffection_content:
 *                 type: string
 *                 example: "The F-Factor represents our commitment"
 *               perffection_video:
 *                 type: string
 *                 format: binary
 *               about_title:
 *                 type: string
 *                 example: "About F-Factor"
 *               about_subtitle:
 *                 type: string
 *                 example: "Our Quality Promise"
 *               about_content:
 *                 type: string
 *                 example: "F-Factor is more than a process"
 *               about_footer_title:
 *                 type: string
 *                 example: "Quality Guaranteed"
 *               footer_title:
 *                 type: string
 *                 example: "Experience F-Factor"
 *               footer_subtitle:
 *                 type: string
 *                 example: "See the Difference"
 *               footer_content:
 *                 type: string
 *                 example: "Every Bonasila product carries the F-Factor seal"
 *               footer_video:
 *                 type: string
 *                 format: binary
 *               footer_link:
 *                 type: string
 *                 example: "/products"
 *               footer_link_title:
 *                 type: string
 *                 example: "Shop F-Factor Products"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: Content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FFactorPage'
 *                 message:
 *                   type: string
 *                   example: "FFactor page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FFactorPage'
 *                 message:
 *                   type: string
 *                   example: "FFactor page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/ffactor-page/status:
 *   patch:
 *     summary: Toggle F-Factor page status
 *     tags: [Admin - F-Factor Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "FFactor page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */