import * as express from 'express';
import * as api from './api';

const app = express();

api.add(app);

export const server = app;
