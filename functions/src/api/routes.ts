import * as express from 'express';
import * as firebase from '../firebase';
// import * as functions from 'firebase-functions';

export function add(app: express.Router): void {
  app.get('/:moduleCode', async (request: express.Request, response: express.Response) => {
    const moduleDocument = await firebase.firestore
      .collection('modules')
      .doc(request.params.moduleCode)
      .get();
    const documentData = moduleDocument.data();
    if (documentData == null) {
      response.sendStatus(400);
      return;
    }
    const moduleSemesters = await firebase.firestore
      .collection('modules')
      .doc(request.params.moduleCode)
      .collection('semesters')
      .get();
    response.send(moduleSemesters.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
  // app.get(
  //   '/:moduleCode/:semester/lecturers',
  //   async (request: express.Request, response: express.Response) => {},
  // );
  app.post(
    '/:moduleCode/:semester',
    async (request: express.Request, response: express.Response) => {
      // Takes in { lecturers: "Andy TAN" }
      const moduleSemester = await firebase.firestore
        .collection('modules')
        .doc(request.params.moduleCode)
        .collection('semesters')
        .doc(request.params.semester)
        .get();
      const documentData = moduleSemester.data();
      if (documentData == null) {
        response.sendStatus(400);
        return;
      }
      await firebase.firestore
        .collection('modules')
        .doc(request.params.moduleCode)
        .collection('semesters')
        .doc(request.params.semester)
        .set({ lecturers: request.body.lecturers });
      response.sendStatus(200);
    },
  );
  app.get(
    '/:moduleCode/:semester/reviews',
    async (request: express.Request, response: express.Response) => {
      const moduleReviews = await firebase.firestore
        .collection('modules')
        .doc(request.params.moduleCode)
        .collection('semesters')
        .doc(request.params.semester)
        .collection('reviews')
        .get();
      response.send(moduleReviews.docs.map((doc) => doc.data()));
    },
  );
  app.post(
    '/:moduleCode/:semester/reviews',
    async (request: express.Request, response: express.Response) => {
      await firebase.firestore
        .collection('modules')
        .doc(request.params.moduleCode)
        .collection('semesters')
        .doc(request.params.semester)
        .collection('reviews')
        .add(request.body);
      response.send(200);
    },
  );
}

// GET /cs1101s
// GET /cs1101s/ay-2020-2021-1/lecturers
// POST /cs1101s/ay-2020-2021-1/lecturers
// GET /cs1101s/ay-2020-2021-1/reviews
// POST /cs1101s/ay-2020-2021-1/reviews
