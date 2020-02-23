import axios from 'axios';

import { USER_LIST } from '../../constants/api';

import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './actionTypes';

const fetchUsers = (since = 0) => (dispatch) => {
  dispatch({ type: FETCH_USERS_START });

  return axios.get(USER_LIST(since))
    .then(({ data }) => {
      dispatch({ type: FETCH_USERS_SUCCESS, data, updateType: since ? 'merge' : 'replace' });
    })
    .catch(() => {
      dispatch({ type: FETCH_USERS_ERROR });
    });
};

export { fetchUsers };
