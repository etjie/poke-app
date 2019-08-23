/*
 *
 * List actions
 *
 */
import * as ActionTypes from './constants';

export function fetchList() {
  return {
    type: ActionTypes.FETCH_LIST,
  };
}

export function fetchListSuccess({ data }) {
  return {
    type: ActionTypes.FETCH_LIST_SUCCESS,
    data,
  };
}

export function fetchListError({ error }) {
  return {
    type: ActionTypes.FETCH_LIST_ERROR,
    error,
  };
}
