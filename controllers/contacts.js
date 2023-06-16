const db = require('../db');

exports.getContacts = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const user = await db.users.findByPk(idUser);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contacts = await db.contacts.findAll({ where: { idUser } });
        res.json(contacts);
    } catch (error) {
        next(error);
    }
};

exports.getContact = async (req, res, next) => {
    try {
        const { idUser, id } = req.params;
        const user = await db.users.findByPk(idUser);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contact = await db.contacts.findOne({ where: { id, idUser } });
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
        const { idUser, ...contactData } = req.body;
        console.log(req.body)
        const user = await db.users.findByPk(idUser);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const newContact = await db.contacts.create({ ...contactData, idUser: idUser });
        res.json(newContact);
    } catch (error) {
        next(error);
    }
};

exports.updateContact = async (req, res, next) => {
    try {
        const { idUser, id } = req.params;
        const user = await db.users.findByPk(idUser);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contact = await db.contacts.findOne({ where: { id, idUser } });
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await db.contacts.update(req.body, {
            where: { id, idUser }
        });
        res.json({ success: 'Contacto actualizado exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.deleteContact = async (req, res, next) => {
    try {
        const { idUser, id } = req.params;
        const user = await db.users.findByPk(idUser);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const contact = await db.contacts.findOne({ where: { id, idUser } });
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await db.contacts.destroy({
            where: { id, idUser }
        });
        res.json({ success: 'Contacto eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
};