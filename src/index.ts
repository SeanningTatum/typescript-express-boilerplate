import './moduleAlias';
import 'dotenv';

import express from 'express';

import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import versionOneRoutes from './api/v1/index.routes';
import swaggerDocs from './config/swagger';
import '~/config/gstore';

const PORT = Number(process.env.PORT) || 5000;
const app = express();

// Body Parser
app.use(bodyParser.json());

// Swagger Setup
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
app.use('/api/v1', versionOneRoutes);

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = server;
