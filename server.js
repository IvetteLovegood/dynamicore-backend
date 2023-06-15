const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');
require('dotenv').config();
const sequelize = require('./db').default;
const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/contacts', contactsRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});