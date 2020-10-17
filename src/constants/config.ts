/* eslint-disable radix */

export const PORT = Number(process.env.PORT) || 5000;

export const MONGO = {
  HOST: process.env.DATABASE_MONGO_HOST || 'mongo',
  USER: process.env.DATABASE_MONGO_USER || '',
  PASSWORD: encodeURIComponent(process.env.DATABASE_MONGO_PASSWORD || ''),
  PORT: parseInt(process.env.DATABASE_MONGO_PORT || '27017'),
  DB: process.env.DATABASE_MONGO_DB || 'YOUR_APP_NAME',
};
