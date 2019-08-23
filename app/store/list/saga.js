import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_LIST } from 'api/list';

import { fetchListSuccess, fetchListError } from './actions';
import * as ActionTypes from './constants';
// import { makeSelectCartData } from './selector';

export function* fetchListSaga() {
  try {
    const data = yield call(GET_LIST);
    yield put(fetchListSuccess({ data }));
  } catch (error) {
    yield put(fetchListError({ error }));
  }
}

// Individual exports for testing
export default function* cartRootSaga() {
  yield takeLatest(ActionTypes.FETCH_LIST, fetchListSaga);
}
