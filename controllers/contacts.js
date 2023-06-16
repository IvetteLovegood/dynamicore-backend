const Contact = require('../models/Contact');
const User = require('../models/User');

exports.getContacts = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contacts = await Contact.findAll({ where: { userId } });
        res.json(contacts);
    } catch (error) {
        next(error);
    }
};

exports.getContact = async (req, res, next) => {
    try {
        const { userId, id } = req.params;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contact = await Contact.findOne({ where: { id, userId } });
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
        const { userId, ...contactData } = req.body;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const newContact = await Contact.create({ ...contactData, userId });
        res.json(newContact);
    } catch (error) {
        next(error);
    }
};


exports.updateContact = async (req, res, next) => {
    try {
        const { userId, id } = req.params;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contact = await Contact.findOne({ where: { id, userId } });
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await Contact.update(req.body, {
            where: { id, userId }
        });
        res.json({ success: 'Contacto actualizado exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.deleteContact = async (req, res, next) => {
    try {
        const { userId, id } = req.params;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contact = await Contact.findOne({ where: { id, userId } });
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await Contact.destroy({
            where: { id, userId }
        });
        res.json({ success: 'Contacto eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
};