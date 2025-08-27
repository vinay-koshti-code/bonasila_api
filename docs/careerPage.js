/**
 * @swagger
 * components:
 *   schemas:
 *     CareerPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single career page record"
 *         tag_link:
 *           type: string
 *           example: "/careers"
 *           description: "Career page tag link"
 *         header:
 *           type: string
 *           example: "Join Our Team"
 *           description: "Main header text"
 *         header_image:
 *           type: string
 *           example: "uploads/career/career-header.jpg"
 *           description: "Header background image"
 *         page_link:
 *           type: string
 *           example: "/about"
 *           description: "Page navigation link"
 *         page_link_title:
 *           type: string
 *           example: "Learn About Us"
 *           description: "Page link title"
 *         header_title:
 *           type: string
 *           example: "Build Your Career with Bonasila"
 *           description: "Header section title"
 *         header_description:
 *           type: string
 *           example: "Join a team that's passionate about creating beautiful plant pots and making a difference in people's lives."
 *           description: "Header section description"
 *         invited_title:
 *           type: string
 *           example: "You're Invited"
 *           description: "Invitation section title"
 *         invited_subtitle:
 *           type: string
 *           example: "To Shape the Future"
 *           description: "Invitation section subtitle"
 *         invited_content:
 *           type: string
 *           example: "We're looking for talented individuals who share our passion for excellence and innovation."
 *           description: "Invitation section content"
 *         invited_image:
 *           type: string
 *           example: "uploads/career/team-work.jpg"
 *           description: "Invitation section image"
 *         invited_link:
 *           type: string
 *           example: "/apply"
 *           description: "Invitation section link"
 *         invited_link_title:
 *           type: string
 *           example: "Apply Now"
 *           description: "Invitation link title"
 *         about_title:
 *           type: string
 *           example: "About Working Here"
 *           description: "About section title"
 *         about_subtitle:
 *           type: string
 *           example: "Culture & Values"
 *           description: "About section subtitle"
 *         about_content:
 *           type: string
 *           example: "At Bonasila, we foster a culture of creativity, collaboration, and continuous learning."
 *           description: "About section content"
 *         about_image:
 *           type: string
 *           example: "uploads/career/office-culture.jpg"
 *           description: "About section image"
 *         about_link:
 *           type: string
 *           example: "/culture"
 *           description: "About section link"
 *         about_link_title:
 *           type: string
 *           example: "Our Culture"
 *           description: "About link title"
 *         form_title:
 *           type: string
 *           example: "Apply for a Position"
 *           description: "Application form title"
 *         form_footer_content:
 *           type: string
 *           example: "We'll review your application and get back to you within 5 business days."
 *           description: "Form footer text"
 *         footer_title:
 *           type: string
 *           example: "Ready to Start?"
 *           description: "Footer section title"
 *         footer_title_image:
 *           type: string
 *           example: "uploads/career/footer-icon.png"
 *           description: "Footer title image"
 *         footer_content:
 *           type: string
 *           example: "Take the first step towards an exciting career with Bonasila."
 *           description: "Footer section content"
 *         footer_image:
 *           type: string
 *           example: "uploads/career/career-footer.jpg"
 *           description: "Footer section image"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *           description: "0=inactive, 1=active"
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *
 * /v1/admin/career-page:
 *   get:
 *     summary: Get career page content
 *     tags: [Admin - Career Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Career page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/CareerPage'
 *                 message:
 *                   type: string
 *                   example: "Career page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Career page content not found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update career page content
 *     tags: [Admin - Career Page Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tag_link:
 *                 type: string
 *                 example: "/careers"
 *               header:
 *                 type: string
 *                 example: "Join Our Growing Team"
 *               header_image:
 *                 type: string
 *                 example: "uploads/career/team-header.jpg"
 *               page_link:
 *                 type: string
 *                 example: "/about-us"
 *               page_link_title:
 *                 type: string
 *                 example: "About Bonasila"
 *               header_title:
 *                 type: string
 *                 example: "Shape Your Future with Us"
 *               header_description:
 *                 type: string
 *                 example: "Be part of a team that's revolutionizing the plant pot industry"
 *               invited_title:
 *                 type: string
 *                 example: "We're Hiring"
 *               invited_subtitle:
 *                 type: string
 *                 example: "Talented Individuals"
 *               invited_content:
 *                 type: string
 *                 example: "Join us in creating beautiful products that bring joy to plant lovers worldwide"
 *               invited_image:
 *                 type: string
 *                 example: "uploads/career/hiring.jpg"
 *               invited_link:
 *                 type: string
 *                 example: "/job-openings"
 *               invited_link_title:
 *                 type: string
 *                 example: "View Openings"
 *               about_title:
 *                 type: string
 *                 example: "Why Bonasila?"
 *               about_subtitle:
 *                 type: string
 *                 example: "Great Place to Work"
 *               about_content:
 *                 type: string
 *                 example: "We offer competitive benefits, growth opportunities, and a collaborative work environment"
 *               about_image:
 *                 type: string
 *                 example: "uploads/career/workplace.jpg"
 *               about_link:
 *                 type: string
 *                 example: "/benefits"
 *               about_link_title:
 *                 type: string
 *                 example: "Employee Benefits"
 *               form_title:
 *                 type: string
 *                 example: "Submit Your Application"
 *               form_footer_content:
 *                 type: string
 *                 example: "Our HR team will review your application and contact you soon"
 *               footer_title:
 *                 type: string
 *                 example: "Start Your Journey"
 *               footer_title_image:
 *                 type: string
 *                 example: "uploads/career/journey-icon.png"
 *               footer_content:
 *                 type: string
 *                 example: "Your career at Bonasila starts here"
 *               footer_image:
 *                 type: string
 *                 example: "uploads/career/journey.jpg"
 *     responses:
 *       200:
 *         description: Content updated successfully
 *       201:
 *         description: Content created successfully
 *       500:
 *         description: Server error
 *
 * /v1/admin/career-page/status:
 *   patch:
 *     summary: Toggle career page status
 *     tags: [Admin - Career Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       404:
 *         description: Page content not found
 *       500:
 *         description: Server error
 */
