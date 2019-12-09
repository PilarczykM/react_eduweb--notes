const firebase = require('firebase');
const { db } = require('../utils/admin');
const {
  validateLoginData,
  validateSignUpData,
} = require('../utils/validators');
const firebaseConfig = require('../utils/keys/config');

firebase.initializeApp(firebaseConfig);

exports.signup = (req, res) => {
  const {
 email, password, confirmPassword, userName 
} = req.body;

  const newUser = {
    email,
    password,
    confirmPassword,
    userName,
  };
  const { errors, valid } = validateSignUpData(newUser);
  if (!valid) return res.status(400).json(errors);

  let userToken;
  let userId;

  db.doc(`/users/${newUser.userName}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ user: 'User with that name exists.' });
      }
      return firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((token) => {
      userToken = token;
      const userCredentials = {
        userName: newUser.userName,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };
      return db.doc(`/users/${newUser.userName}`).set(userCredentials);
    })
    .then(() => res.status(201).json({ token: userToken }))
    .catch((err) => {
      if (err.code === 'auth/email-already-in-use') {
        res.status(400).json({ email: 'Email is alreadry in use!' });
      }
      res
        .status(500)
        .json({ general: 'Something went wrong, please try again' });
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { errors, valid } = validateLoginData(user);

  if (!valid) return res.status(404).json(errors);

  let loggedUser = {};

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      loggedUser = {
        uid: data.user.uid,
        email: data.user.email,
      };

      return data.user.getIdToken();
    })
    .then((token) => res.json({ ...loggedUser, token }))
    .catch((err) => res.status(500).json({ error: err }));
};
