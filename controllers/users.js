const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
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
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        await User.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ success: 'Usuario actualizado correctamente' });
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        await User.destroy({
            where: { id: req.params.id }
        });
        res.json({ success: 'Usuario eliminado correctamente' });
    } catch (error) {
        next(error);
    }
};
