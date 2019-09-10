import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST
} from '../actions/post_actions'; 
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const postsReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      if (action.payload) { 
        // debugger
        return Object.assign({}, state, action.payload.posts)
      } else {
        return state
      };
    
    case RECEIVE_ALL_POSTS:
      return action.payload.posts || {};
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.payload.post.id]: action.payload.post});
    default:
      return state;
  }
}

export default postsReducer;