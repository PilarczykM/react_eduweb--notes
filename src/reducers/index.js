import {
  ADD_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_SUCCESS,
  REMOVE_ITEM_SUCCESS,
} from '../actions';

const initialState = {
  user: {
    userUID: 'sBJP8PEm4MQNefRLAXsoOdxvi0O2',
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [payload.itemType]: payload.data,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {
          email: payload.data.email,
          uid: payload.data.uid,
          token: payload.data.token,
        },
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [payload.pageContext]: state[payload.pageContext].filter(
          (item) => item.id !== payload.id,
        ),
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.item],
      };

    default:
      return state;
  }
};

export default rootReducer;
