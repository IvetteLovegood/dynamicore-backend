const express = require('express');
const app = express();
const cors = require('cors');
const usersRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

app.use('/api/users', usersRoutes);
app.use('/api/contacts', contactsRoutes);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Dynamicore',
      description: 'Documentación de la API de Dynamicore',
      contact: {
        name: 'Soporte de Dynamicore'
      },
      servers: ['http://localhost:8000/']
    }
  },
  apis: ['server.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
