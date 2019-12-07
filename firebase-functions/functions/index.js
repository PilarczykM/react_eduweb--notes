const app = require('express')();
const functions = require('firebase-functions');

const {
  addItem,
  deleteItem,
  getItem,
  getAllItems,
  getAllItemsOfType,
} = require('./handlers/items');

// * === Items routes === *
// ========================
app.get('/items/type/', getAllItemsOfType);
app.get('/items/:itemId', getItem);
app.delete('/items/:itemId', deleteItem);
app.post('/items', addItem);
app.get('/items', getAllItems);

// * === Export main api handler === *
// ===================================
exports.api = functions.region('europe-west2').https.onRequest(app);
