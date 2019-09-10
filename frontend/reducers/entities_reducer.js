import usersReducer from "./users_reducer";
import { combineReducers } from "redux";
import postsReducer from './posts_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
})

export default entitiesReducer;