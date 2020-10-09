import express from 'express';
import routes from './api/v1/index.routes';

const PORT = Number(process.env.PORT) || 8080;
const app = express();

app.use('/api/v1', routes);

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = server;
