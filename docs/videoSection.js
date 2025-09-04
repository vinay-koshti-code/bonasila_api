/**
 * @swagger
 * components:
 *   schemas:
 *     VideoSection:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         tag_line:
 *           type: string
 *           example: "Our Video Gallery"
 *         description:
 *           type: string
 *           example: "Watch our amazing video content"
 *         video_file:
 *           type: string
 *           example: "https://example.com/video.mp4"
 *         youtube_video:
 *           type: string
 *           example: "https://youtube.com/watch?v=example"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *
 * /v1/admin/gallery-section:
 *   get:
 *     summary: Get video section content
 *     tags: [Admin - Gallery Section]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Video section content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/VideoSection'
 *                 message:
 *                   type: string
 *                   example: "Video section content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Video section content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Video section content not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update video section content
 *     tags: [Admin - Gallery Section]
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
 *                 example: "Our Video Gallery"
 *               description:
 *                 type: string
 *                 example: "Watch our amazing video content"
 *               video_file:
 *                 type: string
 *                 format: binary
 *                 description: "Video file upload"
 *               youtube_video:
 *                 type: string
 *                 example: "https://youtube.com/watch?v=example"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: Video section content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/VideoSection'
 *                 message:
 *                   type: string
 *                   example: "Video section content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Video section content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/VideoSection'
 *                 message:
 *                   type: string
 *                   example: "Video section content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Server error
 *
 * /v1/admin/gallery-section/status:
 *   patch:
 *     summary: Toggle video section status
 *     tags: [Admin - Gallery Section]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Video section status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Video section status updated to active"
 *       404:
 *         description: Video section content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Video section content not found"
 *       500:
 *         description: Server error
 *
 * /v1/web/videosection:
 *   get:
 *     summary: Get video section data for public access
 *     tags: [Web API - Video Section]
 *     responses:
 *       200:
 *         description: Video section data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     video_section_content:
 *                       $ref: '#/components/schemas/VideoSection'
 *                     meta_content:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         keywords:
 *                           type: string
 *                 message:
 *                   type: string
 *                   example: "Video section data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Video section content not found
 *       500:
 *         description: Server error
 */