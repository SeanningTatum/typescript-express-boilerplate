import './moduleAlias';
import dotenv from 'dotenv';
import express from 'express';

import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import versionOneRoutes from './api/v1/index.routes';
import swaggerDocs from './config/swagger';
import connectToMongoDb from './config/mongo';

dotenv.config();

export default function createServer(test?: boolean) {
  const server = express();

  // MongoDB Setup
  connectToMongoDb(test);

  // Body Parser
  server.use(bodyParser.json());

  // Routes
  server.use('/api/v1', versionOneRoutes);

  if (!test) {
    // Swagger Setup
    server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  }

  return server;
}
