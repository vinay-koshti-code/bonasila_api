/**
 * @swagger
 * components:
 *   schemas:
 *     PageMedia:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         page_type:
 *           type: string
 *           enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *           example: "home_page"
 *           description: "Type of page this media belongs to"
 *         block_id:
 *           type: integer
 *           example: 5
 *           description: "ID of the page list item this media is associated with"
 *         media_type:
 *           type: string
 *           enum: [image, video, pdf]
 *           example: "image"
 *           description: "Type of media file"
 *         file_url:
 *           type: string
 *           example: "uploads/page-media/hero-image.jpg"
 *           description: "URL path to the media file"
 *         alt_text:
 *           type: string
 *           example: "Beautiful plant pots in a modern setting"
 *           description: "Alternative text for accessibility"
 *         order_no:
 *           type: integer
 *           example: 1
 *           description: "Display order of the media item"
 *         status:
 *           type: integer
 *           enum: [0, 1, 2]
 *           example: 1
 *           description: "0=inactive, 1=active, 2=deleted"
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *         deleted_on:
 *           type: string
 *           format: date-time
 *           nullable: true
 *
 *     CreatePageMedia:
 *       type: object
 *       required:
 *         - page_type
 *         - media_type
 *         - file_url
 *       properties:
 *         page_type:
 *           type: string
 *           enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *           example: "gallery_page"
 *           description: "Type of page this media belongs to"
 *         block_id:
 *           type: integer
 *           example: 3
 *           description: "ID of the page list item (optional)"
 *         media_type:
 *           type: string
 *           enum: [image, video, pdf]
 *           example: "video"
 *           description: "Type of media file"
 *         file_url:
 *           type: string
 *           example: "uploads/page-media/product-showcase.mp4"
 *           description: "URL path to the media file"
 *         alt_text:
 *           type: string
 *           example: "Product showcase video"
 *           description: "Alternative text for accessibility"
 *         order_no:
 *           type: integer
 *           example: 2
 *           description: "Display order of the media item"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/page-media:
 *   get:
 *     summary: Get page media with pagination and filtering
 *     tags: [Admin - Page Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page_type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *         description: Type of page to fetch media for
 *       - in: query
 *         name: block_id
 *         schema:
 *           type: integer
 *         description: Filter by specific page list item ID
 *       - in: query
 *         name: media_type
 *         schema:
 *           type: string
 *           enum: [image, video, pdf]
 *         description: Filter by media type
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
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1, 2]
 *         description: Filter by status (0=inactive, 1=active, 2=deleted)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, order_no, file_url, status, created_on]
 *         description: Sort field
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Page media fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/PageMedia'
 *                 message:
 *                   type: string
 *                   example: "Page media fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Missing required parameters
 *       404:
 *         description: No media found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create a new page media item
 *     tags: [Admin - Page Media Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePageMedia'
 *           examples:
 *             gallery_image:
 *               summary: Gallery Image
 *               value:
 *                 page_type: "gallery_page"
 *                 media_type: "image"
 *                 file_url: "uploads/gallery/pot-collection-1.jpg"
 *                 alt_text: "Beautiful ceramic pot collection"
 *                 order_no: 1
 *                 status: 1
 *             hero_video:
 *               summary: Hero Section Video
 *               value:
 *                 page_type: "home_page"
 *                 block_id: 2
 *                 media_type: "video"
 *                 file_url: "uploads/home/hero-video.mp4"
 *                 alt_text: "Bonasila craftsmanship showcase"
 *                 order_no: 1
 *                 status: 1
 *     responses:
 *       201:
 *         description: Page media item created successfully
 *       400:
 *         description: Validation error or creation failed
 *       500:
 *         description: Server error
 *
 * /v1/admin/page-media/{id}:
 *   get:
 *     summary: Get page media item by ID
 *     tags: [Admin - Page Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page media item ID
 *     responses:
 *       200:
 *         description: Page media item fetched successfully
 *       404:
 *         description: Page media item not found
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update page media item
 *     tags: [Admin - Page Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page media item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page_type:
 *                 type: string
 *                 enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *               block_id:
 *                 type: integer
 *               media_type:
 *                 type: string
 *                 enum: [image, video, pdf]
 *               file_url:
 *                 type: string
 *               alt_text:
 *                 type: string
 *               order_no:
 *                 type: integer
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Page media item updated successfully
 *       404:
 *         description: Page media item not found
 *       400:
 *         description: Update failed
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete page media item (soft delete)
 *     tags: [Admin - Page Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page media item ID
 *     responses:
 *       200:
 *         description: Page media item deleted successfully
 *       404:
 *         description: Page media item not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/page-media/status/{id}:
 *   patch:
 *     summary: Toggle page media item status
 *     tags: [Admin - Page Media Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page media item ID
 *     responses:
 *       200:
 *         description: Page media item status updated successfully
 *       404:
 *         description: Page media item not found
 *       500:
 *         description: Server error
 */
