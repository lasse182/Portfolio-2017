
import { fetchProjects } from '../actions/index';

export function onProjectsEnter(store) {
  store.dispatch(fetchProjects());
}