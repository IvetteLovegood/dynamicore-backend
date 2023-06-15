const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./models/User')(sequelize, Sequelize);
db.contacts = require('./models/Contact')(sequelize, Sequelize);

db.user.hasMany(db.contacts, { as: 'Contacts' });
db.contacts.belongsTo(db.user, {
  foreignKey: 'userId',
  as: 'user'
});

module.exports = db;