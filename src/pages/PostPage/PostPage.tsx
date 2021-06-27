import React, { useContext, useEffect } from 'react';
import { RootState } from '../../ducks/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostRequest } from '../../ducks/postReducer/postReducer';
import { AuthContext } from '../../App';
const PostPage: React.FC = () => {
  const dispatch = useDispatch();
  const user  = useContext(AuthContext);
  const { posts } = useSelector((state: RootState) => {
    return state.posts
  })
  useEffect(() => {
    dispatch(fetchPostRequest({postId: 1}))
  }, [dispatch])
  
  return (
    <>
      <div id="store">
        From Store
        {posts.map((post) => {
          return (
            <div key={`${post.id}`}>{post.id}</div>
          )
        })
        }
      </div>
      <div id="context" >
        From AuthContext
        <div>{user?.id}</div>
        <div>{user?.name}</div>
      </div>
    </>
  )
}

export default PostPage;