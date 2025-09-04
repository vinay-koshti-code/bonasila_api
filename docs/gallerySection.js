/**
 * @swagger
 * /v1/admin/gallery-section:
 *   get:
 *     summary: Get all gallery sections
 *     tags: [Admin - Gallery Section Management]
 *     security:
 *       - BearerAuth: []
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
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1, 2]
 *         description: Filter by status
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search by title
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, title, order_no, status, created_on]
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
 *         description: Gallery sections fetched successfully
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
 *                   example: "Gallery sections fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create gallery section
 *     tags: [Admin - Gallery Section Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - image
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Modern Collection"
 *               description:
 *                 type: string
 *                 example: "Contemporary plant pots for modern spaces"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Gallery section image"
 *               image_alt:
 *                 type: string
 *                 example: "Modern plant pot collection"
 *               link_url:
 *                 type: string
 *                 example: "/collections/modern"
 *               order_no:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       201:
 *         description: Gallery section created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/GallerySection'
 *                 message:
 *                   type: string
 *                   example: "Gallery section created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/gallery-section/{id}:
 *   get:
 *     summary: Get gallery section by ID
 *     tags: [Admin - Gallery Section Management]
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
 *         description: Gallery section fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/GallerySection'
 *                 message:
 *                   type: string
 *                   example: "Gallery section fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   put:
 *     summary: Update gallery section
 *     tags: [Admin - Gallery Section Management]
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               image_alt:
 *                 type: string
 *               link_url:
 *                 type: string
 *               order_no:
 *                 type: integer
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Gallery section updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/GallerySection'
 *                 message:
 *                   type: string
 *                   example: "Gallery section updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   delete:
 *     summary: Delete gallery section (soft delete)
 *     tags: [Admin - Gallery Section Management]
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
 *         description: Gallery section deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Gallery section deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/gallery-section/status/{id}:
 *   patch:
 *     summary: Toggle gallery section status
 *     tags: [Admin - Gallery Section Management]
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
 *         description: Gallery section status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Gallery section status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */