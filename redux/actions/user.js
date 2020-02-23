import axios from 'axios';

import {
  FETCH_FOLLOWERS_START,
  FETCH_FOLLOWERS_SUCCESS,
  FETCH_FOLLOWERS_ERROR,
} from './actionTypes';

const fetchFollowers = (url) => (dispatch) => {
  dispatch({ type: FETCH_FOLLOWERS_START });

  return axios.get(url)
    .then(({ data }) => {
      dispatch({ type: FETCH_FOLLOWERS_SUCCESS, data });
    })
    .catch(() => {
      dispatch({ type: FETCH_FOLLOWERS_ERROR });
    });
};

export {
  fetchFollowers,
};
