/* eslint-disable radix */
import mongoose from 'mongoose';
import { uri, testUri } from '~/constants/config';

async function connectToMongoDb(test?: boolean) {
  return mongoose.connect(!test ? uri : testUri,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log('Failed to connect to MongoDB');

      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
}

export default connectToMongoDb;
