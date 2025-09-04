/**
 * @swagger
 * /v1/admin/career-page:
 *   get:
 *     summary: Get career page content
 *     tags: [Admin - Career Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Career page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/CareerPage'
 *                 message:
 *                   type: string
 *                   example: "Career page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update career page content
 *     tags: [Admin - Career Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               tag_link:
 *                 type: string
 *                 example: "/careers"
 *               header:
 *                 type: string
 *                 example: "Join Our Team"
 *               header_image:
 *                 type: string
 *                 format: binary
 *               page_link:
 *                 type: string
 *                 example: "/about"
 *               page_link_title:
 *                 type: string
 *                 example: "Learn About Us"
 *               header_title:
 *                 type: string
 *                 example: "Build Your Career with Bonasila"
 *               header_description:
 *                 type: string
 *                 example: "Join a team that's passionate about creating beautiful plant pots"
 *               invited_title:
 *                 type: string
 *                 example: "You're Invited"
 *               invited_subtitle:
 *                 type: string
 *                 example: "To Shape the Future"
 *               invited_content:
 *                 type: string
 *                 example: "We're looking for talented individuals"
 *               invited_image:
 *                 type: string
 *                 format: binary
 *               invited_link:
 *                 type: string
 *                 example: "/apply"
 *               invited_link_title:
 *                 type: string
 *                 example: "Apply Now"
 *               about_title:
 *                 type: string
 *                 example: "About Working Here"
 *               about_subtitle:
 *                 type: string
 *                 example: "Culture & Values"
 *               about_content:
 *                 type: string
 *                 example: "We foster a culture of creativity"
 *               about_image:
 *                 type: string
 *                 format: binary
 *               about_link:
 *                 type: string
 *                 example: "/culture"
 *               about_link_title:
 *                 type: string
 *                 example: "Our Culture"
 *               form_title:
 *                 type: string
 *                 example: "Apply for a Position"
 *               form_footer_content:
 *                 type: string
 *                 example: "We'll review your application"
 *               footer_title:
 *                 type: string
 *                 example: "Ready to Start?"
 *               footer_title_image:
 *                 type: string
 *                 format: binary
 *               footer_content:
 *                 type: string
 *                 example: "Take the first step"
 *               footer_image:
 *                 type: string
 *                 format: binary
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
 *                   $ref: '#/components/schemas/CareerPage'
 *                 message:
 *                   type: string
 *                   example: "Career page content updated successfully"
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
 *                   $ref: '#/components/schemas/CareerPage'
 *                 message:
 *                   type: string
 *                   example: "Career page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/career-page/status:
 *   patch:
 *     summary: Toggle career page status
 *     tags: [Admin - Career Page Management]
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
 *                   example: "Career page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */