const express = require("express");
const router = express.Router();
const {
    createPayment,
    getAllPayments,
    getPayment,
    updatePayment,
    deletePayment,
} = require("../Controllers/paymentController");


/**
 * @swagger
 * /payment:
 *   post:
 *     summary: Create a new payment
 *     tags:
 *       - Payments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               amount:
 *                 type: number
 *               paymentMethod:
 *                 type: string
 *     responses:
 *       200:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post("/payment", createPayment);

/**
 * @swagger
 * /payment:
 *   get:
 *     summary: Get all payments
 *     tags:
 *       - Payments
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       500:
 *         description: Internal server error
 */
router.get("/payments", getAllPayments);

/**
 * @swagger
 * /payment/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags:
 *       - Payments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Internal server error
 */
router.get("/payment/:id", getPayment);

/**
 * @swagger
 * /payment/{id}:
 *   put:
 *     summary: Update a payment by ID
 *     tags:
 *       - Payments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               amount:
 *                 type: number
 *               paymentMethod:
 *                 type: string
 *               paymentDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Payment not found
 */
router.put("/payment/:id", updatePayment);

/**
 * @swagger
 * /payment/{id}:
 *   delete:
 *     summary: Delete a payment by ID
 *     tags:
 *       - Payments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Internal server error
 */
router.delete("/payment/:id", deletePayment);

module.exports = router;