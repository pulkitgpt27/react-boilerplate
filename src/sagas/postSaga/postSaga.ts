import { call, fork, takeLatest, all, put } from "redux-saga/effects";
import * as actions from "../../ducks/postReducer/postReducer";
import * as api from '../../api/api';
import constants from '../../utils/constants';
import { PostType } from '../../types/post';
import { addNotification, NotificationLevel } from '../../ducks/notificationReducer/notificationReducer';


function* fetchPostSaga(action: any) {
  try {
    const res: PostType = yield call(api.GET, `${constants.apiRoutes.fetchPost}/${action.payload.postId}`);
    console.log("res", res);
    if(res && res.status && res.status > 300) {
      yield put(addNotification("Unable to fetch post", NotificationLevel.Error));
      yield put(actions.fetchPostFailure({error: `${res.status}`}))
    } else {
      yield put(actions.fetchPostSuccess(res))
    }
  } catch (error) {
    const errorMessage =  error.message ? error.message.toString() : ""; 
    yield put(addNotification(errorMessage, NotificationLevel.Error));
    yield put(actions.fetchPostFailure({error}))
    yield console.log(error);
  }
}

export function* watchFetchPostSaga() {
  yield takeLatest(actions.PostActionTypes.FETCH_POST_REQUEST, fetchPostSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchPostSaga)
  ]);
}