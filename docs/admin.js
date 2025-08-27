/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "admin"
 *           description: "Administrator name"
 *         email:
 *           type: string
 *           format: email
 *           example: "admin@bonasila.com"
 *           description: "Administrator email"
 *         status:
 *           type: integer
 *           enum: [0, 1, 2]
 *           example: 1
 *           description: "0=inactive, 1=active, 2=deleted"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     AdminLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "admin@bonasila.com"
 *           description: "Administrator email"
 *         password:
 *           type: string
 *           format: password
 *           example: "admin"
 *           description: "Administrator password"
 *
 *     AdminLoginResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "admin"
 *         email:
 *           type: string
 *           example: "admin@bonasila.com"
 *         accessToken:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *           description: "JWT access token for authentication"
 *         refreshToken:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *           description: "JWT refresh token for token renewal"
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: "Enter JWT token obtained from login endpoint"
 *
 * /v1/admin/login:
 *   post:
 *     summary: Administrator login
 *     tags: [Admin Management]
 *     description: Authenticate administrator and receive JWT tokens. If no admin exists and default credentials are used, a new admin will be created.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminLogin'
 *           examples:
 *             default_admin:
 *               summary: Default Admin Login
 *               value:
 *                 email: "admin@bonasila.com"
 *                 password: "admin"
 *             existing_admin:
 *               summary: Existing Admin Login
 *               value:
 *                 email: "admin@bonasila.com"
 *                 password: "your_secure_password"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 data:
 *                   $ref: '#/components/schemas/AdminLoginResponse'
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Admin created successfully (first-time setup)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Admin created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/AdminLoginResponse'
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Invalid credentials or missing fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid password"
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
 *                   example: "Login failed"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 * /v1/admin/profile:
 *   get:
 *     summary: Get administrator profile
 *     tags: [Admin Management]
 *     security:
 *       - bearerAuth: []
 *     description: Retrieve the current administrator's profile information
 *     responses:
 *       200:
 *         description: Admin profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Admin profile"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "admin"
 *                     email:
 *                       type: string
 *                       example: "admin@bonasila.com"
 *       400:
 *         description: Admin not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Admin not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access"
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
 *                   example: "Failed to get admin profile"
 *                 status:
 *                   type: boolean
 *                   example: false
 */
