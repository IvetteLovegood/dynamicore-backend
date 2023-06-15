const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./models/User')(sequelize, Sequelize);
db.contacts = require('./models/Contact')(sequelize, Sequelize);

db.users.hasMany(db.contacts, { as: 'Contacts' });
db.contacts.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
});

module.exports = db;