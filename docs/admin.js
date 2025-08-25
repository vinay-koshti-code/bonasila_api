/**
 * @swagger
 * /v1/admin/login:
 *   post:
 *     tags:
 *       - Admin Authentication
 *     summary: Admin login endpoint
 *     description: Authenticates an admin user and returns access token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 default: admin@bonasila.com
 *                 description: Admin Email id.
 *               password:
 *                 type: string
 *                 default: admin
 *                 description: Admin password
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: JWT access/refresh token
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 * 
 * @swagger
 * /v1/admin/*:
 *   all:
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Token is valid but lacks required permissions
 * 
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */