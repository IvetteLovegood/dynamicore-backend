const path = require('path');

module.exports = {
    swaggerDefinition: {
        info: {
          title: 'Dynamicore Backend API',
          description: 'Dynamicore Backend API Information',
          contact: {
            name: 'Developer Name'
          },
          servers: ['http://localhost:8000']
        }
      },
      apis: ['../routes/*.js']
    };
