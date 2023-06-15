const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define('Contact', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
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

    return Contact;

};
