import { 
  ADD_NEW_POST,
  FETCHING_POSTS,
  POSTS_FETCHED,
  FETCH_ERROR
} from '../actions/types';

// Initial state for the post store
const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

// Reducer
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCHING_POSTS:
      return {
        ...state,
        status: 'loading'
      }
    case POSTS_FETCHED:
      return {
        ...state,
        status: 'succeeded',
        posts: [...state.posts, ...payload]
      }
    case FETCH_ERROR:
      return {
        ...state,
        status: 'error',
        error: payload
      }
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, payload]
      }
    default:
      return state;
  }
}