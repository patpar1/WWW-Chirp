import {
  ADD_NEW_POST,
  FETCHING_POSTS,
  POSTS_FETCHED,
  FETCH_ERROR
} from './types'

/* Action for feching all posts from the database */
export const fetchPosts = () => dispatch => {
  // Set the current store status to loading
  dispatch({
    type: FETCHING_POSTS
  })

  // Send AJAX request to the server API (node.js server)
  fetch("http://localhost:3000/posts")

  // Change the response to JSON object
    .then(res => res.json())

  // If the request was successful, dispatch the response to the reducer
    .then(data => dispatch({
      type: POSTS_FETCHED,
      payload: data
    }))

  // Otherwise dispatch the error to the reducer
    .catch(error => dispatch({
      type: FETCH_ERROR,
      payload: error
    }))
}

/* Action for creating a new post */
export const addNewPost = postData => dispatch => {
  // Set the current store status to loading
  dispatch({
    type: FETCHING_POSTS
  })

  // Send AJAX request to the server API (node.js server)
  fetch('http://localhost:3000/posts/create', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })

  // Change the response to JSON object
    .then(res => res.json())

  // If the request was successful, dispatch the response to the reducer
    .then(post => dispatch({
        type: ADD_NEW_POST,
        payload: post
      }))
      
  // Otherwise dispatch the error to the reducer
    .catch(error => dispatch({
      type: FETCH_ERROR,
      payload: error
    }))
}