const axios = require('axios');

const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';
const AUTH_REQUEST = 'AUTH_REQUEST';

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const FETCH_REQUEST = 'FETCH_REQUEST';

// const API_URL = 'https://europe-west2-mynotes-d9696.cloudfunctions.net/api';
const API_URL = 'http://localhost:5000/mynotes-d9696/europe-west2/api';

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

const fetchItems = (cardType) => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });
  return axios.default
    .get(`${API_URL}/items/type`, {
      params: {
        cardType,
        userUID: getState().user.userUID,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          itemType: cardType,
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

const authenticate = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios.default
    .post(`${API_URL}/login`, {
      email,
      password,
    })
    .then((response) => {
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
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  addItem,
  authenticate,
  fetchItems,
  removeItem,
};
