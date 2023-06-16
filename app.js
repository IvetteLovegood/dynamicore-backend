const express = require('express');
const app = express();
const cors = require('cors');
const usersRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./config/swaggerOptions');

require('dotenv').config();
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



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/users', usersRoutes);
app.use('/api/contacts', contactsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Cachando el error!');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
