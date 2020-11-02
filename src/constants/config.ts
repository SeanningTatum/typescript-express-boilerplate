/* eslint-disable radix */

export const PORT = Number(process.env.PORT) || 5000;

const MONGO = {
  HOST: process.env.DATABASE_MONGO_HOST || 'mongo',
  USER: process.env.DATABASE_MONGO_USER || '',
  PASSWORD: encodeURIComponent(process.env.DATABASE_MONGO_PASSWORD || ''),
  PORT: parseInt(process.env.DATABASE_MONGO_PORT || '27017'),
  DB: process.env.DATABASE_MONGO_DB || 'YOUR_APP_NAME',
};

const MONGO_JEST = {
  HOST: process.env.DATABASE_MONGO_HOST || 'mongo',
  USER: '',
  PASSWORD: '',
  PORT: 27017,
  DB: 'Jest',
};

const credential = MONGO.USER && MONGO.PASSWORD ? `${MONGO.USER}:${MONGO.PASSWORD}@` : '';

export const testUri = `mongodb://${MONGO_JEST.HOST}:${MONGO_JEST.PORT}/${MONGO_JEST.DB}`;
export const uri = `mongodb://${credential}${MONGO.HOST}:${MONGO.PORT}/${MONGO.DB}`;
