import * as functions from 'firebase-functions';
import * as App from './app';

exports.app = functions.https.onRequest(App.server);

// GET /cs1101s
// GET /cs1101s/ay-2020-2021-1/lecturers
// POST /cs1101s/ay-2020-2021-1/lecturers
// GET /cs1101s/ay-2020-2021-1/reviews
// POST /cs1101s/ay-2020-2021-1/reviews
