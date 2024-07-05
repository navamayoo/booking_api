const express = require("express");
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getBooking,
  updateBooking,
  deleteBooking,
  findUserByBooking,
  findBookingsByUser,
} = require("../Controllers/bookingController");

// Routes for CRUD operations on bookings
/**
 * @swagger
 * /booking:
 *   post:
 *     summary: Create a new booking
 *     tags:
 *       - Bookings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               serviceId:
 *                 type: string
 *               bookingDate:
 *                 type: string
 *                 format: date
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *               notes:
 *                 type: string
 *               paymentId:
 *                 type: string
 *               totalAmount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post("/booking", createBooking);

/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Get all bookings
 *     tags:
 *       - Bookings
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       500:
 *         description: Internal server error
 */
router.get("/bookings", getAllBookings);

/**
 * @swagger
 * /booking/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.get("/booking/:id", getBooking);

/**
 * @swagger
 * /booking/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               serviceId:
 *                 type: string
 *               bookingDate:
 *                 type: string
 *                 format: date
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *               notes:
 *                 type: string
 *               paymentId:
 *                 type: string
 *               totalAmount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Booking not found
 */
router.put("/booking/:id", updateBooking);

/**
 * @swagger
 * /booking/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.delete("/booking/:id", deleteBooking);

// Find User by Booking
router.get("/booking/:id/user", findUserByBooking);
// Find Booking by user
router.get("/booking/:id/booking", findBookingsByUser);
module.exports = router;
