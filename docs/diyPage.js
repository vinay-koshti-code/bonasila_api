/**
 * @swagger
 * /v1/admin/doityourself-page:
 *   get:
 *     summary: Get DIY page content
 *     tags: [Admin - DIY Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: DIY page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/DIYPage'
 *                 message:
 *                   type: string
 *                   example: "DIY page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update DIY page content
 *     tags: [Admin - DIY Page Management]
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
 *                 example: "Do It Yourself - Creative Plant Pot Projects"
 *               video_file:
 *                 type: string
 *                 format: binary
 *               bottom_title_link:
 *                 type: string
 *                 example: "/diy-tutorials"
 *               bottom_title:
 *                 type: string
 *                 example: "More DIY Projects"
 *               bottom_allow_files:
 *                 type: string
 *                 example: "true"
 *               bottom_info:
 *                 type: string
 *                 example: "Share your own DIY creations"
 *               bottom_content:
 *                 type: string
 *                 example: "Upload photos of your DIY projects"
 *               popup_title:
 *                 type: string
 *                 example: "DIY Tips & Tricks"
 *               popup_content:
 *                 type: string
 *                 example: "Get expert tips for your projects"
 *               popup_file:
 *                 type: string
 *                 format: binary
 *               footer_text:
 *                 type: string
 *                 example: "Join our DIY community"
 *               list_footer:
 *                 type: string
 *                 example: "Happy Crafting!"
 *               list_header:
 *                 type: string
 *                 example: "Popular DIY Projects"
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
 *                   $ref: '#/components/schemas/DIYPage'
 *                 message:
 *                   type: string
 *                   example: "DIY page content updated successfully"
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
 *                   $ref: '#/components/schemas/DIYPage'
 *                 message:
 *                   type: string
 *                   example: "DIY page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/doityourself-page/status:
 *   patch:
 *     summary: Toggle DIY page status
 *     tags: [Admin - DIY Page Management]
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
 *                   example: "DIY page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */