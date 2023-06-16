const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Retrieve a list of contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 */
router.get('/', contactController.getContacts);

/**
 * @swagger
 * /api/contacts/{id}:
 *   get:
 *     summary: Retrieve a single contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: A single contact
 */
router.get('/:id', contactController.getContact);

/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact
 *     responses:
 *       200:
 *         description: The created contact
 */
router.post('/', contactController.createContact);

/**
 * @swagger
 * /api/contacts/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: The updated contact
 */
router.put('/:id', contactController.updateContact);

/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: The deleted contact
 */
router.delete('/:id', contactController.deleteContact);


module.exports = router;