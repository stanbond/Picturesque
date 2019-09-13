import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'; 
import { RECEIVE_USER } from '../actions/user_actions';

const postsReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      if (action.payload) { 
        return Object.assign({}, state, action.payload.posts)
      } else {
        return state
      };
    case RECEIVE_ALL_POSTS:
      return action.payload.posts || {};
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.payload.post.id]: action.payload.post});
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
}

export default postsReducer;