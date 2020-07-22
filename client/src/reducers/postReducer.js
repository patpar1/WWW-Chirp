import { ADD_NEW_POST, FETCHING_POSTS, POSTS_FETCHED, FETCH_ERROR } from '../actions/types';

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        status: 'loading'
      }
    case POSTS_FETCHED:
      return {
        ...state,
        status: 'succeeded',
        posts: [...state.posts, ...action.payload]
      }
    case FETCH_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload
      }
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    default:
      return state;
  }
}