const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');

/**
 * @swagger
 * /contacts:
 *  get:
 *    description: Use to request all contacts
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/Contact'
 */
router.get('/', contactController.getContacts);

/**
 * @swagger
 * /contacts/{id}:
 *  get:
 *    description: Use to request a contact by ID
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
 *          $ref: '#/definitions/Contact'
 */
router.get('/:id', contactController.getContact);

/**
 * @swagger
 * /contacts:
 *  post:
 *    description: Use to create a contact
 *    parameters:
 *      - name: contact
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Contact'
 *    responses:
 *      '201':
 *        description: Contact created successfully
 */
router.post('/', contactController.createContact);

/**
 * @swagger
 * /contacts/{id}:
 *  put:
 *    description: Use to update a contact by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *      - name: contact
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Contact'
 *    responses:
 *      '200':
 *        description: Contact updated successfully
 */
router.put('/:id', contactController.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *  delete:
 *    description: Use to delete a contact by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Contact deleted successfully
 */
router.delete('/:id', contactController.deleteContact);

module.exports = router;

/**
 * @swagger
 * definitions:
 *   Contact:
 *     type: object
 *     required:
 *       - name
 *       - email
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       phone:
 *         type: string
 *       idUser:
 *         type: integer
 */
