/**
 * @swagger
 * components:
 *   schemas:
 *     HomePage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single homepage record"
 *         slide_title:
 *           type: string
 *           example: "Welcome to Bonasila"
 *           description: "Main slide title on homepage"
 *         slide_image:
 *           type: string
 *           example: "uploads/homepage/slide-image.jpg"
 *           description: "Main slide background image"
 *         pushup_link:
 *           type: string
 *           example: "/products"
 *           description: "First pushup section link URL"
 *         pushup_link_title:
 *           type: string
 *           example: "View Products"
 *           description: "First pushup section link text"
 *         pushup_header:
 *           type: string
 *           example: "Premium Plant Pots"
 *           description: "Pushup section header"
 *         pushup_description:
 *           type: string
 *           example: "Discover our collection of premium plant pots"
 *           description: "First pushup section description"
 *         pushup_description_1:
 *           type: string
 *           example: "Handcrafted with care and attention to detail"
 *           description: "Second pushup section description"
 *         pushup_link_1:
 *           type: string
 *           example: "/about"
 *           description: "Second pushup section link URL"
 *         pushup_link_title_1:
 *           type: string
 *           example: "Learn More"
 *           description: "Second pushup section link text"
 *         pushup_description_2:
 *           type: string
 *           example: "Perfect for indoor and outdoor use"
 *           description: "Third pushup section description"
 *         video_file_autoplay:
 *           type: string
 *           example: "uploads/homepage/autoplay-video.mp4"
 *           description: "Autoplay video file path"
 *         plant_lover_title:
 *           type: string
 *           example: "For Plant Lovers"
 *           description: "Plant lover section title"
 *         plant_lover_content:
 *           type: string
 *           example: "We understand your passion for plants and provide the perfect homes for them"
 *           description: "Plant lover section content"
 *         slider_title:
 *           type: string
 *           example: "Our Collections"
 *           description: "Product slider section title"
 *         slider_content:
 *           type: string
 *           example: "Browse through our carefully curated collections"
 *           description: "Product slider section content"
 *         slider_footer_title:
 *           type: string
 *           example: "Quality Guaranteed"
 *           description: "Slider footer section title"
 *         slider_footer_content:
 *           type: string
 *           example: "All our products come with quality assurance"
 *           description: "Slider footer section content"
 *         client_title:
 *           type: string
 *           example: "Our Happy Clients"
 *           description: "Client section title"
 *         client_image:
 *           type: string
 *           example: "uploads/homepage/clients-banner.jpg"
 *           description: "Client section image"
 *         client_image_alt:
 *           type: string
 *           example: "Happy clients with our plant pots"
 *           description: "Client image alt text"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *           description: "0=inactive, 1=active"
 *         created_on:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *         updated_on:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *
 *     UpdateHomePage:
 *       type: object
 *       properties:
 *         slide_title:
 *           type: string
 *           example: "Welcome to Bonasila - Premium Plant Pots"
 *           description: "Main slide title on homepage"
 *         slide_image:
 *           type: string
 *           example: "uploads/homepage/new-slide-image.jpg"
 *           description: "Main slide background image"
 *         pushup_link:
 *           type: string
 *           example: "/collections"
 *           description: "First pushup section link URL"
 *         pushup_link_title:
 *           type: string
 *           example: "Explore Collections"
 *           description: "First pushup section link text"
 *         pushup_header:
 *           type: string
 *           example: "Handcrafted Excellence"
 *           description: "Pushup section header"
 *         pushup_description:
 *           type: string
 *           example: "Each pot is carefully crafted to perfection"
 *           description: "First pushup section description"
 *         pushup_description_1:
 *           type: string
 *           example: "Using traditional techniques and modern design"
 *           description: "Second pushup section description"
 *         pushup_link_1:
 *           type: string
 *           example: "/craftsmanship"
 *           description: "Second pushup section link URL"
 *         pushup_link_title_1:
 *           type: string
 *           example: "Our Process"
 *           description: "Second pushup section link text"
 *         pushup_description_2:
 *           type: string
 *           example: "Sustainable and eco-friendly materials"
 *           description: "Third pushup section description"
 *         video_file_autoplay:
 *           type: string
 *           example: "uploads/homepage/crafting-process.mp4"
 *           description: "Autoplay video file path"
 *         plant_lover_title:
 *           type: string
 *           example: "Designed for Plant Enthusiasts"
 *           description: "Plant lover section title"
 *         plant_lover_content:
 *           type: string
 *           example: "Every pot is designed with your plants' health and beauty in mind"
 *           description: "Plant lover section content"
 *         slider_title:
 *           type: string
 *           example: "Featured Collections"
 *           description: "Product slider section title"
 *         slider_content:
 *           type: string
 *           example: "Discover our most popular and newest collections"
 *           description: "Product slider section content"
 *         slider_footer_title:
 *           type: string
 *           example: "Lifetime Quality"
 *           description: "Slider footer section title"
 *         slider_footer_content:
 *           type: string
 *           example: "Built to last with premium materials and craftsmanship"
 *           description: "Slider footer section content"
 *         client_title:
 *           type: string
 *           example: "Trusted by Thousands"
 *           description: "Client section title"
 *         client_image:
 *           type: string
 *           example: "uploads/homepage/testimonials-banner.jpg"
 *           description: "Client section image"
 *         client_image_alt:
 *           type: string
 *           example: "Customer testimonials and reviews"
 *           description: "Client image alt text"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/home-page:
 *   get:
 *     summary: Get homepage content
 *     tags: [Admin - Home Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Homepage content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/HomePage'
 *                 message:
 *                   type: string
 *                   example: "Homepage content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Homepage content not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Homepage content not found"
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
 *     summary: Create or update homepage content
 *     tags: [Admin - Home Page Management]
 *     security:
 *       - bearerAuth: []
 *     description: Creates homepage content if it doesn't exist, or updates existing content. Only one homepage record is maintained.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               slide_title:
 *                 type: string
 *                 example: "Welcome to Bonasila"
 *               slide_image:
 *                 type: string
 *                 format: binary
 *                 description: "Homepage slide image"
 *               pushup_link:
 *                 type: string
 *                 example: "/products"
 *               pushup_link_title:
 *                 type: string
 *                 example: "View Products"
 *               pushup_header:
 *                 type: string
 *                 example: "Premium Plant Pots"
 *               pushup_description:
 *                 type: string
 *                 example: "Discover our collection"
 *               pushup_description_1:
 *                 type: string
 *                 example: "Quality craftsmanship"
 *               pushup_link_1:
 *                 type: string
 *                 example: "/about"
 *               pushup_link_title_1:
 *                 type: string
 *                 example: "Learn More"
 *               pushup_description_2:
 *                 type: string
 *                 example: "Sustainable materials"
 *               video_file_autoplay:
 *                 type: string
 *                 format: binary
 *                 description: "Homepage autoplay video file"
 *               plant_lover_title:
 *                 type: string
 *                 example: "For Plant Lovers"
 *               plant_lover_content:
 *                 type: string
 *                 example: "Transform your space"
 *               slider_title:
 *                 type: string
 *                 example: "Featured Collection"
 *               slider_content:
 *                 type: string
 *                 example: "Explore our latest designs"
 *               slider_footer_title:
 *                 type: string
 *                 example: "Get Started"
 *               slider_footer_content:
 *                 type: string
 *                 example: "Browse our catalog"
 *               client_title:
 *                 type: string
 *                 example: "Our Clients"
 *               client_image:
 *                 type: string
 *                 format: binary
 *                 description: "Client showcase image"
 *               client_image_alt:
 *                 type: string
 *                 example: "Client testimonials"
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateHomePage'
 *           examples:
 *             complete_homepage:
 *               summary: Complete Homepage Content
 *               value:
 *                 slide_title: "Welcome to Bonasila - Premium Plant Pots"
 *                 slide_image: "uploads/homepage/hero-slide.jpg"
 *                 pushup_header: "Handcrafted Excellence"
 *                 pushup_description: "Each pot is carefully crafted to perfection"
 *                 pushup_link: "/collections"
 *                 pushup_link_title: "Explore Collections"
 *                 pushup_description_1: "Using traditional techniques and modern design"
 *                 pushup_link_1: "/about"
 *                 pushup_link_title_1: "Our Story"
 *                 pushup_description_2: "Sustainable and eco-friendly materials"
 *                 video_file_autoplay: "uploads/homepage/crafting-video.mp4"
 *                 plant_lover_title: "For Plant Enthusiasts"
 *                 plant_lover_content: "Every pot is designed with your plants' health and beauty in mind"
 *                 slider_title: "Featured Collections"
 *                 slider_content: "Discover our most popular collections"
 *                 slider_footer_title: "Quality Guaranteed"
 *                 slider_footer_content: "Built to last with premium materials"
 *                 client_title: "Trusted by Thousands"
 *                 client_image: "uploads/homepage/clients.jpg"
 *                 client_image_alt: "Happy customers with our products"
 *                 status: 1
 *             partial_update:
 *               summary: Partial Homepage Update
 *               value:
 *                 slide_title: "Updated Welcome Message"
 *                 pushup_header: "New Header Text"
 *                 status: 1
 *     responses:
 *       200:
 *         description: Homepage content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/HomePage'
 *                 message:
 *                   type: string
 *                   example: "Homepage content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Homepage content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/HomePage'
 *                 message:
 *                   type: string
 *                   example: "Homepage content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                   description: Validation errors
 *                 message:
 *                   type: string
 *                   example: "Validation failed"
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
