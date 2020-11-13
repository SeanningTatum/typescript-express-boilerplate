import { Datastore } from '@google-cloud/datastore';
import { Gstore } from 'gstore-node';

const gstore = new Gstore({ errorOnEntityNotFound: false });
const datastore = new Datastore({
  namespace: 'Local',
  projectId: process.env.DATASTORE_PROJECT_ID || 'ph-stocks-project',
  // keyFilename: './src/config/servicekeys/PH-Stocks-Project.json',
});

gstore.connect(datastore);
console.log(`Connected to: ${process.env.DATASTORE_PROJECT_ID}:8000`);
export default gstore;
