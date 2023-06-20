const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', userController.getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retrieve a single user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: A single user
 */
router.get('/:id', userController.getUser);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     responses:
 *       200:
 *         description: The created user
 */
router.post('/', userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: The updated user
 */
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: The deleted user
 */

router.delete('/:id', userController.deleteUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     responses:
 *       200:
 *         description: The logged in user
 */
router.post('/login', userController.loginUser);


module.exports = router;