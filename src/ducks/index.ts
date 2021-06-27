import { combineReducers } from "redux";
import posts, {PostStore} from './postReducer/postReducer';

const allReducers = combineReducers({
  posts
});

interface CombinedStateType {
  posts: PostStore
}
const rootReducer = (state: CombinedStateType|undefined, action: any): CombinedStateType => {
  
  return allReducers(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
