import * as express from 'express';
import * as firebase from '../firebase';

export function add(app: express.Router): void {
  app.get('/{moduleCode}', (request: express.Request, response: express.Response) => {});
  app.get(
    '/{moduleCode}/{semester}/lecturers',
    (request: express.Request, response: express.Response) => {
      firebase.firestore.collection('modules').doc(request.params.moduleCode);
    },
  );
  app.post(
    '/{moduleCode}/{semester}/lecturers',
    (request: express.Request, response: express.Response) => {},
  );
  app.get(
    '/{moduleCode}/{semester}/reviews',
    (request: express.Request, response: express.Response) => {},
  );
  app.post(
    '/{moduleCode}/{semester}/reviews',
    (request: express.Request, response: express.Response) => {},
  );
}

// GET /cs1101s
// GET /cs1101s/ay-2020-2021-1/lecturers
// POST /cs1101s/ay-2020-2021-1/lecturers
// GET /cs1101s/ay-2020-2021-1/reviews
// POST /cs1101s/ay-2020-2021-1/reviews
