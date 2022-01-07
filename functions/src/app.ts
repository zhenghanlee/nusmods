import * as express from 'express';
import pinoHttp from 'pino-http';
import * as api from './api';

const app = express();
app.use(pinoHttp());
api.add(app);

export const server = app;
