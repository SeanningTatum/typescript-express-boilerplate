/* eslint-disable radix */
import mongoose from 'mongoose';
import { MONGO } from '~/constants/config';

const credential = MONGO.USER && MONGO.PASSWORD ? `${MONGO.USER}:${MONGO.PASSWORD}@` : '';

const uri = `mongodb://${credential}${MONGO.HOST}:${MONGO.PORT}/${MONGO.DB}`;

mongoose.connect(uri);

async function connectToMongoDb() {
  return mongoose.connect(uri)
    .then(() => {
      console.log(`Connected to MongoDB "${MONGO.HOST}:${MONGO.PORT}"`);
    })
    .catch(() => {
      console.log('Failed to connect to MongoDB');
    });
}

export default connectToMongoDb;
