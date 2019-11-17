import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'; 
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';


const postsReducer = (state={}, action) => {
  Object.freeze(state);
  // let newState = Object.assign({}, state);
  let newLikerIdsArray;
  let newLikeIdsArray;
  let target;
  let postObj; 

  switch(action.type) {
    case RECEIVE_USER:
      if (action.payload) { 
        return Object.assign({}, state, action.payload.posts)
      } else {
        return state;
      };
    case RECEIVE_ALL_POSTS:
      return action.payload.posts || {};
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.payload.post.id]: action.payload.post});
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    case RECEIVE_LIKE:
      target = action.like.post_id;
      postObj = newState[action.like.post_id];
      newLikerIdsArr = postObj.liker_ids;
      newLikeIdsArr = postObj.like_ids;
      newLikerIdsArr.push(action.like.user_id);
      newLikeIdsArr.push(action.like.id);
      newState[action.like.post_id].liker_ids = newLikerIdsArr;
      newState[action.like.post_id].like_ids = newLikeIdsArr;
      return newState;
    case REMOVE_LIKE:
      newLikerIdsArr = newState[action.like.post_id].liker_ids;
      newLikeIdsArr = newState[action.like.post_id].like_ids;
      newLikerIdsArr = newLikerIdsArr.filter(val => val !== action.like.user_id);
      newLikeIdsArr = newLikeIdsArr.filter(val => val !== action.like.id);
      newState[action.like.post_id].liker_ids = newLikerIdsArr;
      newState[action.like.post_id].like_ids = newLikeIdsArr;
      return newState; 
    default:
      return state;
  }
}

export default postsReducer;