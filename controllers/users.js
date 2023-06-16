const db = require('../db');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await db.users.findAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await db.users.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const { email } = req.body;
        const existingUser = await db.users.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'El correo electrónico ya está en uso. Por favor, use otro correo electrónico.' });
        }

        const newUser = await db.users.create(req.body);
        res.json(newUser);
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        await db.users.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ success: 'Usuario actualizado correctamente' });
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        await db.users.destroy({
            where: { id: req.params.id }
        });
        res.json({ success: 'Usuario eliminado correctamente' });
    } catch (error) {
        next(error);
    }
};
