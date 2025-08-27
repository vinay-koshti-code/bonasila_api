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
 * /v1/admin/about-page-team:
 *   get:
 *     summary: Get all team members with pagination and filtering
 *     tags: [Admin - AboutPage Team Management]
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
 *         description: No team members found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No About Page Teams found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 *   post:
 *     summary: Create a new team member
 *     tags: [Admin - AboutPage Team Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAboutPageTeam'
 *           examples:
 *             ceo_example:
 *               summary: CEO Team Member
 *               value:
 *                 name: "Michael Brown"
 *                 position: "Chief Executive Officer"
 *                 description: "Michael leads Bonasila with over 25 years of experience in manufacturing and business development."
 *                 linkedin_link: "https://linkedin.com/in/michaelbrown"
 *                 image: "uploads/team/michael-brown.jpg"
 *                 image_alt: "Michael Brown, CEO of Bonasila"
 *                 status: 1
 *             designer_example:
 *               summary: Designer Team Member
 *               value:
 *                 name: "Emma Wilson"
 *                 position: "Senior Product Designer"
 *                 description: "Emma creates innovative designs that blend traditional craftsmanship with modern aesthetics."
 *                 instagram_link: "https://instagram.com/emmawilson"
 *                 linkedin_link: "https://linkedin.com/in/emmawilson"
 *                 image: "uploads/team/emma-wilson.jpg"
 *                 image_alt: "Emma Wilson, Senior Product Designer"
 *                 status: 1
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
 *         description: Validation error or creation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: object
 *                   description: Validation errors by field
 *                 message:
 *                   type: string
 *                   example: "About Page Team not created"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 * /v1/admin/about-page-team/{id}:
 *   get:
 *     summary: Get team member by ID
 *     tags: [Admin - AboutPage Team Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Team member not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About Page Team not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 *   put:
 *     summary: Update team member
 *     tags: [Admin - AboutPage Team Management]
 *     security:
 *       - bearerAuth: []
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
 *         application/json:
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
 *                 example: "uploads/team/updated-photo.jpg"
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
 *         description: Team member not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About Page Team not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Update failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About Page Team update failed"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 *   delete:
 *     summary: Delete team member (soft delete)
 *     tags: [Admin - AboutPage Team Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Team member not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About Page Team not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 * /v1/admin/about-page-team/status/{id}:
 *   patch:
 *     summary: Toggle team member status
 *     tags: [Admin - AboutPage Team Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Team member not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "About Page Team not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 */
