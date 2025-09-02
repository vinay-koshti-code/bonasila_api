/**
 * @swagger
 * components:
 *   schemas:
 *     GalleryPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         video:
 *           type: string
 *           example: "https://bucket.s3.region.amazonaws.com/uploads/gallery/video.mp4"
 *         image:
 *           type: string
 *           example: "https://bucket.s3.region.amazonaws.com/uploads/gallery/image.jpg"
 *         image_alt:
 *           type: string
 *           example: "Gallery image description"
 *         youtube_video_link:
 *           type: string
 *           example: "https://youtube.com/watch?v=example"
 *         status:
 *           type: integer
 *           enum: [0, 1, 2]
 *           example: 1
 *         deleted_on:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *
 * /v1/admin/gallery-page:
 *   get:
 *     summary: Get all gallery pages
 *     tags: [Admin Management - Gallery]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1, 2]
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, status, created_on]
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *     responses:
 *       200:
 *         description: Gallery pages fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/GalleryPage'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: No gallery pages found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create gallery page
 *     tags: [Admin Management - Gallery]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - video
 *               - image
 *               - image_alt
 *             properties:
 *               video:
 *                 type: string
 *                 format: binary
 *                 description: "Gallery video file"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Gallery image file"
 *               image_alt:
 *                 type: string
 *                 example: "Gallery image description"
 *               youtube_video_link:
 *                 type: string
 *                 example: "https://youtube.com/watch?v=example"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       201:
 *         description: Gallery page created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 *
 * /v1/admin/gallery-page/{id}:
 *   get:
 *     summary: Get gallery page by ID
 *     tags: [Admin Management - Gallery]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gallery page fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/GalleryPage'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: Gallery page not found
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update gallery page
 *     tags: [Admin Management - Gallery]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               video:
 *                 type: string
 *                 format: binary
 *                 description: "Gallery video file"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Gallery image file"
 *               image_alt:
 *                 type: string
 *               youtube_video_link:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Gallery page updated successfully
 *       404:
 *         description: Gallery page not found
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete gallery page
 *     tags: [Admin Management - Gallery]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gallery page deleted successfully
 *       404:
 *         description: Gallery page not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/gallery-page/status/{id}:
 *   patch:
 *     summary: Toggle gallery page status
 *     tags: [Admin Management - Gallery]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gallery page status updated successfully
 *       404:
 *         description: Gallery page not found
 *       500:
 *         description: Server error
 *
 * /v1/web/gallerypage:
 *   get:
 *     summary: Get gallery page data for public access
 *     tags: [Web API - Gallery]
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
 *                       properties:
 *                         plant_lover_steps:
 *                           type: array
 *                         brand:
 *                           type: array
 *                         product:
 *                           type: array
 *                         name_list:
 *                           type: array
 *                         slider:
 *                           type: array
 *                         client_list:
 *                           type: array
 *                 message:
 *                   type: string
 *                   example: "Gallery page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Server error
 */