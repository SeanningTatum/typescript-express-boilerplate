import swaggerJSDoc from 'swagger-jsdoc';
import { PORT } from '~/constants/config';

const localServer: swaggerJSDoc.ServerInformation = {
  url: `http://localhost:${PORT}`,
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

  apis: ['src/api/v1/**/*.ts', 'src/models/*.ts'],

};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
