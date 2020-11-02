import server from './server';
import { PORT } from './constants/config';

server().listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
