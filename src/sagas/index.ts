import { fork, all } from "redux-saga/effects";
import postSaga from './postSaga/postSaga';

export default function* rootSaga() {
  yield all([
    fork(postSaga)
  ]) 
}