const axios = require('axios');

const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';
const AUTH_REQUEST = 'AUTH_REQUEST';

const removeItem = (itemType, id) => ({
  type: REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});

const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        created: new Date().toISOString(),
        ...itemContent,
      },
    },
  };
};

// https://europe-west2-mynotes-d9696.cloudfunctions.net/api/login

const authenticate = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios.default
    .post('https://europe-west2-mynotes-d9696.cloudfunctions.net/api/login', {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      dispatch({ type: AUTH_SUCCESS, payload: response });
    })
    .catch(({ response }) => {
      // console.log(response.data, response.status);
      dispatch({ type: AUTH_FAILURE });
    });
};

export {
  ADD_ITEM,
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  REMOVE_ITEM,
  addItem,
  authenticate,
  removeItem,
};
