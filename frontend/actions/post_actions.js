import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST'; 

const receiveAllPosts = payload => ({
  type: RECEIVE_ALL_POSTS,
  payload
});

const receivePost = payload => ({
  type: RECEIVE_POST,
  payload
});

export const fetchAllPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
    .fail(res => dispatch(receivePostErrors(res.responseJSON)));
};

export const fetchPost = id => dispatch => {
  return PostAPIUtil.fetchPost(id)
    .then(payload => dispatch(receivePost(payload)))
    .fail(res => dispatch(receivePostErrors(res.responseJSON)));
};

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post)
    .then(newPost => dispatch(receivePost(newPost)))
    .fail(res => dispatch(receivePostErrors(res.responseJSON)));
};