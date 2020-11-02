import './moduleAlias';

import express from 'express';

import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import versionOneRoutes from './api/v1/index.routes';
import swaggerDocs from './config/swagger';
import connectToMongoDb from './config/mongo';

require('dotenv').config();

// dotenv.config();

const server = express();

// MongoDB Setup
connectToMongoDb();

// Body Parser
server.use(bodyParser.json());

// Swagger Setup
server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
server.use('/api/v1', versionOneRoutes);

export default server;
