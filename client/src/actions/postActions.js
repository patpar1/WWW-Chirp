import { ADD_NEW_POST, FETCHING_POSTS, POSTS_FETCHED, FETCH_ERROR } from './types'

export const fetchPosts = () => dispatch => {
  dispatch({
    type: FETCHING_POSTS
  })
  fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data => dispatch({
      type: POSTS_FETCHED,
      payload: data
    }))
    .catch(error => dispatch({
      type: FETCH_ERROR,
      payload: error
    }))
}

export const addNewPost = postData => dispatch => {
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
        type: ADD_NEW_POST,
        payload: post
      })
    ).catch(error => dispatch({
      type: FETCH_ERROR,
      payload: error
    }))
}