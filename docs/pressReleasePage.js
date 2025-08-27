/**
 * @swagger
 * components:
 *   schemas:
 *     PressReleasePage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         question:
 *           type: string
 *           example: "Bonasila Launches Revolutionary Eco-Friendly Plant Pot Collection"
 *           description: "Press release headline or question"
 *         image:
 *           type: string
 *           example: "uploads/press-release/eco-collection-launch.jpg"
 *           description: "Press release featured image"
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
 *     CreatePressReleasePage:
 *       type: object
 *       required:
 *         - question
 *         - image
 *       properties:
 *         question:
 *           type: string
 *           example: "Bonasila Wins 'Best Sustainable Product' Award at Garden Expo 2024"
 *           description: "Press release headline or main content"
 *         image:
 *           type: string
 *           example: "uploads/press-release/award-ceremony.jpg"
 *           description: "Press release featured image"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/press-release:
 *   get:
 *     summary: Get all press releases with pagination and filtering
 *     tags: [Admin - Press Release Page Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Filter by status (0=inactive, 1=active)
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
 *         description: No press releases found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No Press Releases found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create a new press release
 *     tags: [Admin - Press Release Page Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePressReleasePage'
 *           examples:
 *             product_launch:
 *               summary: Product Launch Press Release
 *               value:
 *                 question: "Bonasila Unveils New Smart Plant Pot Collection with IoT Integration"
 *                 image: "uploads/press-release/smart-pots-launch.jpg"
 *                 status: 1
 *             award_announcement:
 *               summary: Award Announcement
 *               value:
 *                 question: "Bonasila Receives Excellence in Design Award from International Garden Association"
 *                 image: "uploads/press-release/design-award.jpg"
 *                 status: 1
 *             sustainability_initiative:
 *               summary: Sustainability Initiative
 *               value:
 *                 question: "Bonasila Commits to 100% Sustainable Materials by 2025"
 *                 image: "uploads/press-release/sustainability-pledge.jpg"
 *                 status: 1
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
 *         description: Validation error or creation failed
 *       500:
 *         description: Server error
 *
 * /v1/admin/press-release/{id}:
 *   get:
 *     summary: Get press release by ID
 *     tags: [Admin - Press Release Page Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Press release not found
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update press release
 *     tags: [Admin - Press Release Page Management]
 *     security:
 *       - bearerAuth: []
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
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Updated: Bonasila Expands International Presence with New European Distribution Center"
 *               image:
 *                 type: string
 *                 example: "uploads/press-release/european-expansion.jpg"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Press release updated successfully
 *       404:
 *         description: Press release not found
 *       400:
 *         description: Update failed
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete press release (soft delete)
 *     tags: [Admin - Press Release Page Management]
 *     security:
 *       - bearerAuth: []
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
 *       404:
 *         description: Press release not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/press-release/status/{id}:
 *   patch:
 *     summary: Toggle press release status
 *     tags: [Admin - Press Release Page Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Press release not found
 *       500:
 *         description: Server error
 */
