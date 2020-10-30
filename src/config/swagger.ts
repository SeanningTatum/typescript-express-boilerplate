import swaggerJSDoc from 'swagger-jsdoc';

const localServer: swaggerJSDoc.ServerInformation = {
  url: 'http://localhost:8080',
};

const swaggerOptions: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'Bank Accounts',
      version: '1.0.0',
      description: 'Simplies bank functions ex: (Texting you when your salary arrives)',
    },
    servers: [localServer],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },
  apis: ['src/api/v1/**/_swagger_/*.yml', 'src/models/_swagger_/*.yml'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
