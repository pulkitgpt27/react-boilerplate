import { combineReducers } from "redux";
import posts, {PostStore} from './postReducer/postReducer';
import notifications, { Notification } from './notificationReducer/notificationReducer';

const allReducers = combineReducers({
  posts,
  notifications
});

interface CombinedStateType {
  posts: PostStore;
  notifications: Notification[];
}
const rootReducer = (state: CombinedStateType|undefined, action: any): CombinedStateType => {
  
  return allReducers(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
