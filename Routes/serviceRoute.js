const express = require("express");
const router = express.Router();
const {
  createService,
  getAllServices,
  getService,
  updateService,
  deleteService,
} = require("../Controllers/serviceController");

// routes/serviceRoute.js
/**
 * @swagger
 * tags:
 *   name: Services
 *   description: CRUD Operations related to Service in Booking system
 */
/**
 * @swagger
 * /services:
 *   post:
 *     summary: Create a new service
 *     tags:
 *       - Services
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *               serviceName:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:
 *                 type: number
 *            example:
 *                 serviceName: Haircut,
 *                 description: Standard haircut service,
 *                 price: 30,
 *                 duration: 30
 *     responses:
 *       200:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post("/service", createService);

// Fetch or Get All Services
/**
 * @swagger
 * /services:
 *   get:
 *     summary: Get all services
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       500:
 *         description: Internal server error
 */
router.get("/services", getAllServices);

// Get a Services
/**
 * @swagger
 * /services/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.get("/service/:id", getService);

//Update a Services
/**
 * @swagger
 * /services/{id}:
 *   put:
 *     summary: Update a service by ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               serviceName:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:
 *                 type: number
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Service not found
 */

router.put("/service/:id", updateService);

// Delete a Services
/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.delete("/service/:id", deleteService);

module.exports = router;
