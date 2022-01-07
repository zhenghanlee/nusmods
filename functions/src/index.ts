import * as functions from 'firebase-functions';
import * as App from './app';

exports.app = functions.https.onRequest(App.server);
