/**
 * @swagger
 * components:
 *   schemas:
 *     AboutPageTeam:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "John Smith"
 *           description: "Team member name"
 *         position:
 *           type: string
 *           example: "CEO & Founder"
 *           description: "Team member position/role"
 *         description:
 *           type: string
 *           example: "John founded Bonasila with a vision to create the finest plant pots. With over 20 years of experience in ceramics, he leads our team with passion and expertise."
 *           description: "Team member bio/description"
 *         facebook_link:
 *           type: string
 *           example: "https://facebook.com/johnsmith"
 *           description: "Facebook profile URL"
 *         instagram_link:
 *           type: string
 *           example: "https://instagram.com/johnsmith"
 *           description: "Instagram profile URL"
 *         linkedin_link:
 *           type: string
 *           example: "https://linkedin.com/in/johnsmith"
 *           description: "LinkedIn profile URL"
 *         image:
 *           type: string
 *           example: "uploads/team/john-smith.jpg"
 *           description: "Team member photo"
 *         image_alt:
 *           type: string
 *           example: "John Smith, CEO of Bonasila"
 *           description: "Alt text for team member photo"
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
 *     CreateAboutPageTeam:
 *       type: object
 *       required:
 *         - name
 *         - position
 *       properties:
 *         name:
 *           type: string
 *           example: "Sarah Johnson"
 *           description: "Team member name"
 *         position:
 *           type: string
 *           example: "Head of Design"
 *           description: "Team member position/role"
 *         description:
 *           type: string
 *           example: "Sarah brings creativity and innovation to our design team, ensuring every pot is both functional and beautiful."
 *           description: "Team member bio/description"
 *         facebook_link:
 *           type: string
 *           example: "https://facebook.com/sarahjohnson"
 *           description: "Facebook profile URL"
 *         instagram_link:
 *           type: string
 *           example: "https://instagram.com/sarahjohnson"
 *           description: "Instagram profile URL"
 *         linkedin_link:
 *           type: string
 *           example: "https://linkedin.com/in/sarahjohnson"
 *           description: "LinkedIn profile URL"
 *         image:
 *           type: string
 *           example: "uploads/team/sarah-johnson.jpg"
 *           description: "Team member photo"
 *         image_alt:
 *           type: string
 *           example: "Sarah Johnson, Head of Design"
 *           description: "Alt text for team member photo"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/aboutteam:
 *   get:
 *     summary: Get all team members with pagination and filtering
 *     tags: [Admin - About Page Team Management]
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
 *         name: name
 *         schema:
 *           type: string
 *         description: Search by team member name
 *       - in: query
 *         name: position
 *         schema:
 *           type: string
 *         description: Search by position
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
 *           enum: [id, name, position, status, created_on]
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
 *         description: Team members fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AboutPageTeam'
 *                 message:
 *                   type: string
 *                   example: "About Page Teams fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create a new team member
 *     tags: [Admin - About Page Team Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - position
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Michael Brown"
 *               position:
 *                 type: string
 *                 example: "Chief Executive Officer"
 *               description:
 *                 type: string
 *                 example: "Michael leads Bonasila with over 25 years of experience..."
 *               facebook_link:
 *                 type: string
 *                 example: "https://facebook.com/michaelbrown"
 *               instagram_link:
 *                 type: string
 *                 example: "https://instagram.com/michaelbrown"
 *               linkedin_link:
 *                 type: string
 *                 example: "https://linkedin.com/in/michaelbrown"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Team member photo"
 *               image_alt:
 *                 type: string
 *                 example: "Michael Brown, CEO of Bonasila"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       201:
 *         description: Team member created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AboutPageTeam'
 *                 message:
 *                   type: string
 *                   example: "About Page Team created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/aboutteam/{id}:
 *   get:
 *     summary: Get team member by ID
 *     tags: [Admin - About Page Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team member ID
 *     responses:
 *       200:
 *         description: Team member fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AboutPageTeam'
 *                 message:
 *                   type: string
 *                   example: "About Page Team fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   put:
 *     summary: Update team member
 *     tags: [Admin - About Page Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team member ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Name"
 *               position:
 *                 type: string
 *                 example: "Updated Position"
 *               description:
 *                 type: string
 *                 example: "Updated bio description"
 *               facebook_link:
 *                 type: string
 *                 example: "https://facebook.com/updated"
 *               instagram_link:
 *                 type: string
 *                 example: "https://instagram.com/updated"
 *               linkedin_link:
 *                 type: string
 *                 example: "https://linkedin.com/in/updated"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Team member photo"
 *               image_alt:
 *                 type: string
 *                 example: "Updated alt text"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Team member updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AboutPageTeam'
 *                 message:
 *                   type: string
 *                   example: "About Page Team updated successfully"
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
 *     summary: Delete team member (soft delete)
 *     tags: [Admin - About Page Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team member ID
 *     responses:
 *       200:
 *         description: Team member deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About Page Team deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/aboutteam/status/{id}:
 *   patch:
 *     summary: Toggle team member status
 *     tags: [Admin - About Page Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team member ID
 *     responses:
 *       200:
 *         description: Team member status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About Page Team status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */