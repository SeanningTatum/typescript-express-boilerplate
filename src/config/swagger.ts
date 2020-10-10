import swaggerJSDoc from 'swagger-jsdoc';

const localServer: swaggerJSDoc.ServerInformation = {
  url: 'http://localhost:8080',
};

const swaggerOptions: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: 'A sample API',
    },
    servers: [localServer],
  },

  apis: ['src/api/v1/**/*.ts'],

};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
