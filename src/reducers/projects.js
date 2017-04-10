import * as types from '../constants/actionTypes';

export default function projects(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {

    case types.REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case types.RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload.projects,
      });

    default:
      return state;
  }
}