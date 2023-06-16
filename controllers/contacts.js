const db = require('../db');

exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await db.contacts.findAll();
        res.json(contacts);
    } catch (error) {
        next(error);
    }
};

exports.getContact = async (req, res, next) => {
    try {
        const { userId } = req.params;
        console.log(userId)
        const contact = await db.contacts.findAll({ where: { userId: idUser } });
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
        console.log(userId)
        const user = await db.users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const newContact = await db.contacts.create({ ...contactData, idUser: userId });
        res.json(newContact);
    } catch (error) {
        next(error);
    }
};

exports.updateContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const contact = await db.contacts.findOne({ where: { id } });
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await db.contacts.update(req.body, {
            where: { id }
        });
        res.json({ success: 'Contacto actualizado exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;

        const contact = await db.contacts.findOne({ where: { id } });
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await db.contacts.destroy({
            where: { id }
        });
        res.json({ success: 'Contacto eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
};