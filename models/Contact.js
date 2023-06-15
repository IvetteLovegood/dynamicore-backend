const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db').default;

const Contact = sequelize.define('Contact', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING
    }
}, {
});

module.exports = Contact;
