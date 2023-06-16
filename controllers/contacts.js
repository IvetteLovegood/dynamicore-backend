const Contact = require('../models/Contact');

exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.findAll();
        res.json(contacts);
    } catch (error) {
        next(error);
    }
};

exports.getContact = async (req, res, next) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        res.json(contact);
    } catch (error) {
        next(error);
    }
};

exports.createContact = async (req, res, next) => {
    try {
        const newContact = await Contact.create(req.body);
        res.json(newContact);
    } catch (error) {
        next(error);
    }
};

exports.updateContact = async (req, res, next) => {
    try {
        await Contact.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ success: 'Contacto actualizado exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.deleteContact = async (req, res, next) => {
    try {
        await Contact.destroy({
            where: { id: req.params.id }
        });
        res.json({ success: 'Contacto eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
};
