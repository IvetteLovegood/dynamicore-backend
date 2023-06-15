const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');
require('dotenv').config();
const app = express();
const db = require('./db');

const setupDatabase = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await db.sequelize.sync();
    console.log('Database & tables created!');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
}

setupDatabase();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/contacts', contactsRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});