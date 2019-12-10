const app = require('express')();
const functions = require('firebase-functions');
const cors = require('cors');

const {
  addItem,
  deleteItem,
  getItem,
  getAllItems,
  getallUserItemsOfType,
} = require('./handlers/items');

const { login, signup } = require('./handlers/user');

app.use(cors());

// * === Items routes === *
// ========================
app.get('/items/type', getallUserItemsOfType);
app.get('/items/:itemId', getItem);
app.delete('/items/:itemId', deleteItem);
app.post('/items', addItem);
app.get('/items', getAllItems);

// * === User routes === *
// =======================
app.post('/signup', signup);
app.post('/login', login);

// * === Export main api handler === *
// ===================================
exports.api = functions.region('europe-west2').https.onRequest(app);
