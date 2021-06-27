import { PostType } from "../../types/post";



//Plan to use redux toolkit to remove saga and all
export enum PostActionTypes {
  FETCH_POST_REQUEST = "FETCH_POST_REQUEST",
  FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
  FETCH_POST_FAILURE = "FETCH_POST_FAILURE" 
}

interface FetchPost {
  postId: number
}

export const fetchPostRequest = (payload: FetchPost) => ({
  type: PostActionTypes.FETCH_POST_REQUEST,
  payload
});


export const fetchPostSuccess = (payload: PostType) => ({
  type: PostActionTypes.FETCH_POST_SUCCESS,
  payload
});

interface FetchPostErrorPayoad {
  error: null | string | Object
}
export const fetchPostFailure = (payload: FetchPostErrorPayoad) => ({
  type: PostActionTypes.FETCH_POST_FAILURE,
  payload
});


export interface PostStore {
  posts: Array<PostType>,
  error: null | string | Object,
  postLoading: null | boolean
}

const initialState: PostStore = {
  posts: [],
  error: null,
  postLoading: null
}


const posts = (state: PostStore = initialState, actions: any) => {
  switch(actions.type) {
    case PostActionTypes.FETCH_POST_REQUEST:
    return {
      ...state,
      pending: true
    }
    case PostActionTypes.FETCH_POST_SUCCESS:
    const posts = [...state.posts];
    posts.push(actions.payload)
    return {
      ...state,
      posts: posts,
      postLoading: false,
      error: null
    }
    case PostActionTypes.FETCH_POST_FAILURE:
    return {
      ...state,
      error: actions.payload.error
    }
    default: 
    return {
      ...state
    }
  }
}

export default posts;
