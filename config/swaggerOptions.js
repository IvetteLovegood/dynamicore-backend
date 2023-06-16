const path = require('path');

module.exports = {
    swaggerDefinition: {
      info: {
        title: 'API de Dynamicore',
        description: 'Documentación de la API de Dynamicore',
        contact: {
          name: 'Soporte de Dynamicore'
        }
    }
    },
    apis: [path.resolve(__dirname, './routes/*.js')],
};