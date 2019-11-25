import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions'; 
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions'; 

const usersReducers = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.user);
    case RECEIVE_ALL_POSTS:
      // { [action.paylod.id]: action.payload }
      console.log(action)
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_POST:
      console.log(action);
      return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
    default:
      return state;
  }
}

export default usersReducers;

// let posts = state.posts || [];
// posts.concat(action.payload);
// // return Object.assign({}, state, action.payload.users);

// return posts;