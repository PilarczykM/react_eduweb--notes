const app = require('express')();
const functions = require('firebase-functions');

const { getAllItems } = require('./handlers/items');

// * === Items routes === *
// ========================
app.get('/items', getAllItems);

// * === Export main api handler === *
// ===================================
exports.api = functions.region('europe-west2').https.onRequest(app);
