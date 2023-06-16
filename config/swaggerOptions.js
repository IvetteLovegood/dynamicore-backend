module.exports = {
    swaggerDefinition: {
      info: {
        title: 'API de Dynamicore',
        description: 'Documentación de la API de Dynamicore',
        contact: {
          name: 'Soporte de Dynamicore'
        },
        servers: [process.env.SERVER_URL || 'http://localhost:8000/']
      }
    },
    apis: ['server.js']
  };