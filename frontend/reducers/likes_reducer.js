import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';


const likesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      if (action.payload.likes === undefined) {
        return state;
      } else {
        return action.payload.likes;
      }
    case RECEIVE_POST:
      return Object.assign({}, state, action.payload.likes);
    case RECEIVE_LIKE:
      // console.log(action)
      return Object.assign({}, state, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      // console.log(action)
      let newState = Object.assign({}, state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
};
export default likesReducer; 
