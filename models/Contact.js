const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define('Contact', {
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
    }, {});

    return Contact;
};