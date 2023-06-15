const Sequelize = require('sequelize');
const User = require('./models/User');
const Contact = require('./models/Contact');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const setupDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log('Database & tables created!');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

setupDatabase();

module.exports = sequelize;