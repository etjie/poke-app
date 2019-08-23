import { all, fork } from 'redux-saga/effects';
import listSaga from './list/saga';
/* import detailSaga from './detail/saga';
import collectionSaga from './collection/saga'; */

export default function* rootSaga() {
  yield all([fork(listSaga)]);
  // yield all([fork(detailSaga)]);
  // yield all([fork(collectionSaga)]);
}
