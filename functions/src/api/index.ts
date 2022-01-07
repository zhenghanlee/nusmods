import * as express from 'express';
import * as cors from 'cors';
import * as routes from './routes';

const api = express.Router();

api.use(
  cors({
    origin: ['http://localhost:8080'],
  }),
);
api.use(express.json({ limit: '4mb' }));

routes.add(api);

export function add(app: express.Express): void {
  app.use('/api/v1', api);
}
