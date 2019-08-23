import produce from 'immer';
import * as ActionTypes from './constants';

/*
 *
 * List reducer
 *
 */

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const listReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_LIST:
        draft.loading = true;
        draft.error = null;
        draft.data = null;
        break;
      case ActionTypes.FETCH_LIST_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        break;
      case ActionTypes.FETCH_LIST_ERROR:
        draft.loading = false;
        draft.data = null;
        draft.error = action.error;
        break;
    }
  });

export default listReducer;
