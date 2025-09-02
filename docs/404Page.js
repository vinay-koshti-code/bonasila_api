/**
 * @swagger
 * components:
 *   schemas:
 *     FourOFourPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         page_title:
 *           type: string
 *           example: "Page Not Found"
 *         page_description:
 *           type: string
 *           example: "The page you are looking for does not exist"
 *         page_link:
 *           type: string
 *           example: "/home"
 *         page_link_title:
 *           type: string
 *           example: "Go to Home"
 *         image:
 *           type: string
 *           example: "https://bucket.s3.region.amazonaws.com/uploads/pages/404-image.jpg"
 *         status:
 *           type: integer
 *           enum: [0, 1]
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
 *     AboutPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         tag_line:
 *           type: string
 *           example: "About Our Company"
 *         header:
 *           type: string
 *           example: "Welcome to Bonasila"
 *         sub_header:
 *           type: string
 *           example: "Your trusted partner"
 *         header_image:
 *           type: string
 *           example: "https://bucket.s3.region.amazonaws.com/uploads/pages/about-header.jpg"
 *         title:
 *           type: string
 *           example: "Our Story"
 *         description:
 *           type: string
 *           example: "We are a leading company in our industry..."
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
 *     AboutPageTeam:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "John Doe"
 *         position:
 *           type: string
 *           example: "CEO"
 *         description:
 *           type: string
 *           example: "John has over 10 years of experience..."
 *         facebook_link:
 *           type: string
 *           example: "https://facebook.com/johndoe"
 *         instagram_link:
 *           type: string
 *           example: "https://instagram.com/johndoe"
 *         linkedin_link:
 *           type: string
 *           example: "https://linkedin.com/in/johndoe"
 *         image:
 *           type: string
 *           example: "https://bucket.s3.region.amazonaws.com/uploads/team/john-doe.jpg"
 *         image_alt:
 *           type: string
 *           example: "John Doe CEO Photo"
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
 * /v1/admin/404:
 *   get:
 *     summary: Get 404 page content
 *     tags: [Admin Management - 404 Pages]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: 404 page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: 404 page content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "404 page content not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update 404 page content
 *     tags: [Admin Management - 404 Pages]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               page_title:
 *                 type: string
 *                 example: "Page Not Found"
 *               page_description:
 *                 type: string
 *                 example: "The page you are looking for does not exist"
 *               page_link:
 *                 type: string
 *                 example: "/home"
 *               page_link_title:
 *                 type: string
 *                 example: "Go to Home"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "404 page image upload"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: 404 page content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: 404 page content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Server error
 *
 * /v1/admin/404/status:
 *   patch:
 *     summary: Toggle 404 page status
 *     tags: [Admin Management - 404 Pages]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: 404 page status updated successfully
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
 *                   example: "404 page status updated to active"
 *       404:
 *         description: 404 page content not found
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
 *                   example: "404 page content not found"
 *       500:
 *         description: Server error
 *
 * /v1/web/404page:
 *   get:
 *     summary: Get 404 page data for public access
 *     tags: [Web API - Pages]
 *     responses:
 *       200:
 *         description: 404 page data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     page_content:
 *                       $ref: '#/components/schemas/FourOFourPage'
 *                 message:
 *                   type: string
 *                   example: "404 page data fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: 404 page content not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/about-page:
 *   get:
 *     summary: Get about page content
 *     tags: [Admin Management - Pages]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: About page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AboutPage'
 *                 message:
 *                   type: string
 *                 status:
 *                   type: boolean
 *       404:
 *         description: About page content not found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update about page content
 *     tags: [Admin Management - Pages]
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
 *                 example: "About Our Company"
 *               header:
 *                 type: string
 *                 example: "Welcome to Bonasila"
 *               sub_header:
 *                 type: string
 *                 example: "Your trusted partner"
 *               header_image:
 *                 type: string
 *                 format: binary
 *                 description: "About page header image"
 *               title:
 *                 type: string
 *                 example: "Our Story"
 *               description:
 *                 type: string
 *                 example: "We are a leading company..."
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: About page content updated successfully
 *       201:
 *         description: About page content created successfully
 *       500:
 *         description: Server error
 *
 * /v1/admin/about-page/status:
 *   patch:
 *     summary: Toggle about page status
 *     tags: [Admin Management - Pages]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: About page status updated successfully
 *       404:
 *         description: About page content not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/aboutteam:
 *   get:
 *     summary: Get all about page team members
 *     tags: [Admin Management - Team]
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
 *         name: name
 *         schema:
 *           type: string
 *       - in: query
 *         name: position
 *         schema:
 *           type: string
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
 *                 status:
 *                   type: boolean
 *       404:
 *         description: No team members found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create team member
 *     tags: [Admin Management - Team]
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
 *                 example: "John Doe"
 *               position:
 *                 type: string
 *                 example: "CEO"
 *               description:
 *                 type: string
 *                 example: "John has over 10 years of experience..."
 *               facebook_link:
 *                 type: string
 *                 example: "https://facebook.com/johndoe"
 *               instagram_link:
 *                 type: string
 *                 example: "https://instagram.com/johndoe"
 *               linkedin_link:
 *                 type: string
 *                 example: "https://linkedin.com/in/johndoe"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Team member photo"
 *               image_alt:
 *                 type: string
 *                 example: "John Doe CEO Photo"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       201:
 *         description: Team member created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 *
 * /v1/admin/aboutteam/{id}:
 *   get:
 *     summary: Get team member by ID
 *     tags: [Admin Management - Team]
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
 *                 status:
 *                   type: boolean
 *       404:
 *         description: Team member not found
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update team member
 *     tags: [Admin Management - Team]
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
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               description:
 *                 type: string
 *               facebook_link:
 *                 type: string
 *               instagram_link:
 *                 type: string
 *               linkedin_link:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: "Team member photo"
 *               image_alt:
 *                 type: string
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Team member updated successfully
 *       404:
 *         description: Team member not found
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete team member
 *     tags: [Admin Management - Team]
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
 *         description: Team member deleted successfully
 *       404:
 *         description: Team member not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/aboutteam/status/{id}:
 *   patch:
 *     summary: Toggle team member status
 *     tags: [Admin Management - Team]
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
 *         description: Team member status updated successfully
 *       404:
 *         description: Team member not found
 *       500:
 *         description: Server error
 */