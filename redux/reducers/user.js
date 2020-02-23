import {
  FETCH_FOLLOWERS_START,
  FETCH_FOLLOWERS_SUCCESS,
  FETCH_FOLLOWERS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  followers: [],
  finished: true,
  error: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_FOLLOWERS_START:
      return { ...state, finished: false, error: false };
    case FETCH_FOLLOWERS_SUCCESS:
      return { ...state, finished: true, followers: action.data };
    case FETCH_FOLLOWERS_ERROR:
      return { ...state, finished: true, error: true };
    default:
      return state;
  }
}
