import './moduleAlias';

import express from 'express';

import swaggerUI from 'swagger-ui-express';
import versionOneRoutes from './api/v1/index.routes';
import swaggerDocs from './config/swagger';

const PORT = Number(process.env.PORT) || 8080;
const app = express();

// Swagger Setup
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
app.use(versionOneRoutes);

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = server;
