import { combineReducers } from 'redux';
import postReducer from './postReducer';

// Basic rootReducer which combines all other reducers
export default combineReducers({
  posts: postReducer,
});