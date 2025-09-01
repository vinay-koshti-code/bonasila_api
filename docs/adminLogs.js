/**
 * @swagger
 * components:
 *   schemas:
 *     AdminLog:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         admin_id:
 *           type: integer
 *           example: 1
 *         public_ip:
 *           type: string
 *           example: "192.168.1.100"
 *         local_ip:
 *           type: string
 *           example: "127.0.0.1"
 *         login_time:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *         logout_time:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: null
 *         city:
 *           type: string
 *           example: "New York"
 *         state:
 *           type: string
 *           example: "New York"
 *         country:
 *           type: string
 *           example: "United States"
 *         user_agent:
 *           type: string
 *           example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
 *         admin:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             name:
 *               type: string
 *               example: "Admin User"
 *             email:
 *               type: string
 *               example: "admin@bonasila.com"
 *
 * /v1/admin/logs:
 *   get:
 *     summary: Get admin login logs
 *     tags: [Admin Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of records per page
 *       - in: query
 *         name: admin_id
 *         schema:
 *           type: integer
 *         description: Filter logs by specific admin ID
 *     responses:
 *       200:
 *         description: Admin logs fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AdminLog'
 *                 total:
 *                   type: integer
 *                   example: 50
 *                   description: Total number of log records
 *                 message:
 *                   type: string
 *                   example: "Admin logs fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       401:
 *         description: Unauthorized - Invalid or missing token
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
 *                   example: "Unauthorized access"
 *       500:
 *         description: Server error
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
 *                   example: "Something went wrong"
 */