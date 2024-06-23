const express = require("express");
const router = express.Router();
const {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
} = require("../Controllers/userController");


// routes/userRoute.js
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: CRUD Operations related to user in Booking system
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get a list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              message: "Bad Request"
 */
//Get All Users
router.get("/user", getAllUsers);


/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: string
 *         example:
 *             658918e852a0131af4c0aab1
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       404:
 *         description: User not found
 */

//Get the User
router.get("/user/:id", getUser);


/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       description: User object to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               dateOfBirth:
 *                 type: date
 *               gender:
 *                 type: string
 *               phoneNum:
 *                 type: integer
 *             example:
 *                name: "John Doe"
 *                address: "Colombo - Srilanka "
 *                dateOfBirth: 07/14/1990
 *                gender: "male"
 *                phoneNum: 01145252525
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Invalid request
 */

//Create User
router.post("/user", createUser);





/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Update the details of a user by providing the user ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the user to be updated.
 *         required: true
 *         schema:
 *           type: string
 *         example:
 *             658918e852a0131af4c0aab1
 *     requestBody:
 *       description: Updated user information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               phoneNum:
 *                 type: integer
 *             example:
 *                name: "John Doe"
 *                address: "Colombo - Srilanka "
 *                dateOfBirth: 07/14/1990
 *                gender: "male"
 *                phoneNum: 01145252525
 *     responses:
 *       200:
 *         description: Successful update
 *         content:
 *           application/json:
 *             example:
 *               message: 'User updated successfully'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'User not found'
 */

//put the User
router.put("/user/:id", updateUser);


/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *         example:
 *             658918e852a0131af4c0aab1
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
//Delete the User
router.delete("/user/:id", deleteUser);

module.exports = router;