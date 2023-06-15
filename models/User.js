const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Contact = require('./Contact');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});

User.hasMany(Contact, { as: 'Contacts' });

module.exports = User;
