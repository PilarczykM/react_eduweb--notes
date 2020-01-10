import {
  ADD_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_SUCCESS,
  REMOVE_ITEM_SUCCESS,
} from '../actions';

const initialState = {
  user: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [payload.itemType]: payload.data,
      };
    case AUTH_SUCCESS:
      const { email, token, uid } = payload.data;
      return {
        ...state,
        user: {
          email,
          userUID: uid,
          token,
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
