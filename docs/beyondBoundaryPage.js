/**
 * @swagger
 * /v1/admin/beyondboundaries-page:
 *   get:
 *     summary: Get beyond boundary page content
 *     tags: [Admin - Beyond Boundary Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Beyond boundary page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/BeyondBoundaryPage'
 *                 message:
 *                   type: string
 *                   example: "Beyond Boundary page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update beyond boundary page content
 *     tags: [Admin - Beyond Boundary Page Management]
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
 *                 example: "Beyond Boundaries, Beyond Expectations"
 *               footer_text:
 *                 type: string
 *                 example: "Pushing the limits of design"
 *               video_autoplay:
 *                 type: string
 *                 format: binary
 *               header_image:
 *                 type: string
 *                 format: binary
 *               footer_pincode_title:
 *                 type: string
 *                 example: "Delivery Across India"
 *               footer_pincode_text:
 *                 type: string
 *                 example: "Enter your pincode to check delivery"
 *               footer_pincode_video:
 *                 type: string
 *                 format: binary
 *               list_header:
 *                 type: string
 *                 example: "Innovation Features"
 *               list_footer:
 *                 type: string
 *                 example: "Experience the difference"
 *               description:
 *                 type: string
 *                 example: "We constantly push beyond conventional boundaries"
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
 *                   $ref: '#/components/schemas/BeyondBoundaryPage'
 *                 message:
 *                   type: string
 *                   example: "Beyond Boundary page content updated successfully"
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
 *                   $ref: '#/components/schemas/BeyondBoundaryPage'
 *                 message:
 *                   type: string
 *                   example: "Beyond Boundary page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/beyondboundaries-page/status:
 *   patch:
 *     summary: Toggle beyond boundary page status
 *     tags: [Admin - Beyond Boundary Page Management]
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
 *                   example: "Beyond Boundary page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */