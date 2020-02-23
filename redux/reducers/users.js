import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  finished: true,
  users: [],
  error: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_START:
      return { ...state, finished: false, error: false };
    case FETCH_USERS_SUCCESS:
      return { ...state, finished: true, users: action.updateType === 'replace' ? action.data : [...state.users, ...action.data] };
    case FETCH_USERS_ERROR:
      return { ...state, finished: true, error: true };
    default:
      return state;
  }
}
