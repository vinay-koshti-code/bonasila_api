/**
 * @swagger
 * /v1/admin/pressrelease-page:
 *   get:
 *     summary: Get all press releases with pagination and filtering
 *     tags: [Admin - Press Release Management]
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
 *           enum: [0, 1]
 *         description: Filter by status
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, created_on, status]
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
 *         description: Press releases fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/PressReleasePage'
 *                 message:
 *                   type: string
 *                   example: "Press Releases fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create a new press release
 *     tags: [Admin - Press Release Management]
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
 *               - category
 *               - date
 *               - image_alt
 *               - header
 *               - image_title
 *               - description
 *               - question
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Bonasila Launches Revolutionary Eco-Friendly Plant Pot Collection"
 *               category:
 *                 type: string
 *                 example: "Product Launch"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-15"
 *               image_alt:
 *                 type: string
 *                 example: "Eco-friendly plant pot collection launch"
 *               header:
 *                 type: string
 *                 example: "Revolutionary Eco-Friendly Collection"
 *               image_title:
 *                 type: string
 *                 example: "Eco Collection Launch Event"
 *               description:
 *                 type: string
 *                 example: "Bonasila introduces a groundbreaking eco-friendly plant pot collection"
 *               question:
 *                 type: string
 *                 example: "What makes this collection environmentally sustainable?"
 *               banner_image:
 *                 type: string
 *                 format: binary
 *               image:
 *                 type: string
 *                 format: binary
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       201:
 *         description: Press release created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PressReleasePage'
 *                 message:
 *                   type: string
 *                   example: "Press Release created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/pressrelease-page/{id}:
 *   get:
 *     summary: Get press release by ID
 *     tags: [Admin - Press Release Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Press release ID
 *     responses:
 *       200:
 *         description: Press release fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PressReleasePage'
 *                 message:
 *                   type: string
 *                   example: "Press Release fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   put:
 *     summary: Update press release
 *     tags: [Admin - Press Release Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Press release ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               image_alt:
 *                 type: string
 *               header:
 *                 type: string
 *               image_title:
 *                 type: string
 *               description:
 *                 type: string
 *               question:
 *                 type: string
 *               banner_image:
 *                 type: string
 *                 format: binary
 *               image:
 *                 type: string
 *                 format: binary
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Press release updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PressReleasePage'
 *                 message:
 *                   type: string
 *                   example: "Press Release updated successfully"
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
 *     summary: Delete press release (soft delete)
 *     tags: [Admin - Press Release Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Press release ID
 *     responses:
 *       200:
 *         description: Press release deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Press Release deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/pressrelease-page/status/{id}:
 *   patch:
 *     summary: Toggle press release status
 *     tags: [Admin - Press Release Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Press release ID
 *     responses:
 *       200:
 *         description: Press release status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Press Release status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */