import { FETCH_POSTS, CREATE_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('http://localhost:3000/posts/create', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: CREATE_POST,
        payload: post
      })
    );
};