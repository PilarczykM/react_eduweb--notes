const admin = require('firebase-admin');

const serviceAccount = require('../utils/keys/mynotes-d9696-firebase-adminsdk-av1iu-fde4d76586.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mynotes-d9696.firebaseio.com',
});

const db = admin.firestore();

module.exports = { admin, db };
