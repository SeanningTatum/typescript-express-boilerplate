import { Datastore } from '@google-cloud/datastore';
import { Gstore } from 'gstore-node';

const gstore = new Gstore();
const datastore = new Datastore({
  namespace: 'Local',
  keyFilename: './src/config/servicekeys/PH-Stocks-Project.json',
});

gstore.connect(datastore);

export default gstore;
