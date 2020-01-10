const axios = require('axios');

const REMOVE_ITEM = 'REMOVE_ITEM';
const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILUER';
const ADD_ITEM = 'ADD_ITEM';

const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';
const AUTH_REQUEST = 'AUTH_REQUEST';

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const FETCH_REQUEST = 'FETCH_REQUEST';

const API_URL = 'https://europe-west2-mynotes-d9696.cloudfunctions.net/api';
// const API_URL = 'http://localhost:5000/mynotes-d9696/europe-west2/api';

const removeItem = (pageContext, id) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_REQUEST,
  });

  axios
    .delete(`${API_URL}/items/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          pageContext,
          id,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: REMOVE_ITEM_FAILURE });
    });
};

const addItem = (itemType, itemContent) => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios.default
    .post(`${API_URL}/items`, {
      cardType: itemType,
      userUID: getState().user.userUID,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({ type: ADD_ITEM_SUCCESS, payload: { itemType, item: data } });
    })
    .catch((err) => {
      dispatch({ type: ADD_ITEM_FAILURE });
    });
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
    .catch(({ response }) => {
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
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  ADD_ITEM_SUCCESS,
};
