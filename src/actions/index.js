import { API_ROOT } from '../constants/api';

import * as types from '../constants/actionTypes';

// Error handling
function failed(e) {
  throw e;
}

// Get all projects
export function requestProjects() {
  return {
    type: types.REQUEST_PROJECTS,
  };
}

export function receiveProjects(json) {
  return {
    type: types.RECEIVE_PROJECTS,
    payload: { projects: json.data },
  };
}

export function fetchProjects() {
  return dispatch => {
    dispatch(requestProjects());
    return fetch(`${API_ROOT}/projects`)
    .then(response => response.json())
    .then(json => dispatch(receiveProjects(json)))
    .catch(e => dispatch(failed(e)));
  };
}