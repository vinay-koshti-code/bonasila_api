/**
 * @swagger
 * components:
 *   schemas:
 *     PressReleaseSection:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier
 *         tag_line:
 *           type: string
 *           description: Tag line for press release section
 *         header_description:
 *           type: string
 *           description: Header description text
 *         status:
 *           type: integer
 *           description: Status (0=inactive, 1=active, 2=deleted)
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *     PressReleaseSectionInput:
 *       type: object
 *       required:
 *         - tag_line
 *         - header_description
 *       properties:
 *         tag_line:
 *           type: string
 *           description: Tag line for press release section
 *         header_description:
 *           type: string
 *           description: Header description text
 */

/**
 * @swagger
 * /api/v1/admin/pressrelease-section/:
 *   get:
 *     summary: Get press release section
 *     tags: [Press Release Section]
 *     responses:
 *       200:
 *         description: Press release section retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/PressReleaseSection'
 *       404:
 *         description: Press release section not found
 *       500:
 *         description: Server error
 *   post:
 *     summary: Create or update press release section
 *     tags: [Press Release Section]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PressReleaseSectionInput'
 *     responses:
 *       200:
 *         description: Press release section saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/PressReleaseSection'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/admin/pressrelease-section/status:
 *   patch:
 *     summary: Toggle press release section status
 *     tags: [Press Release Section]
 *     responses:
 *       200:
 *         description: Status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Press release section not found
 *       500:
 *         description: Server error
 */