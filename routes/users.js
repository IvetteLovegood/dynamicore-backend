const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/User'
 */
router.get('/', userController.getUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    description: Use to request a user by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *          $ref: '#/definitions/User'
 */
router.get('/:id', userController.getUser);

/**
 * @swagger
 * /users:
 *  post:
 *    description: Use to create a user
 *    parameters:
 *      - name: user
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/User'
 *    responses:
 *      '201':
 *        description: User created successfully
 */
router.post('/', userController.createUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    description: Use to update a user by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *      - name: user
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/User'
 *    responses:
 *      '200':
 *        description: User updated successfully
 */
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    description: Use to delete a user by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: User deleted successfully
 */
router.delete('/:id', userController.deleteUser);

/**
 * @swagger
 * /users/login:
 *  post:
 *    description: Use to login a user
 *    parameters:
 *      - name: user
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: User logged in successfully
 */
router.post('/login', userController.loginUser);

module.exports = router;