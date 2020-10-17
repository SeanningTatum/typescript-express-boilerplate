/* eslint-disable radix */
import mongoose from 'mongoose';

const MONGO = {
  HOST: process.env.DATABASE_MONGO_HOST || 'mongo',
  USER: process.env.DATABASE_MONGO_USER || '',
  PASSWORD: encodeURIComponent(process.env.DATABASE_MONGO_PASSWORD || ''),
  PORT: parseInt(process.env.DATABASE_MONGO_PORT || '27017'),
  DB: process.env.DATABASE_MONGO_DB || 'YOUR_APP_NAME',
};

const credential = MONGO.USER && MONGO.PASSWORD ? `${MONGO.USER}:${MONGO.PASSWORD}@` : '';

const uri = `mongodb://${credential}${MONGO.HOST}:${MONGO.PORT}/${MONGO.DB}`;

mongoose.connect(uri);

function connectToMongoDb() {
  mongoose.connect(uri)
    .then(() => {
      console.log(`Connected to MongoDB "${MONGO.HOST}:${MONGO.PORT}"`);
    })
    .catch(() => {
      console.log('Failed to connect to MongoDB');
    });
}

export default connectToMongoDb;
