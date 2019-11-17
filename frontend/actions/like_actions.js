import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const deleteLike = like => ({
  type: REMOVE_LIKE,
  like
});


export const createLike = like => dispatch => (
  LikeAPIUtil.createLike(like).then(like => dispatch(receiveLike(like)))
);

export const removeLike = like => dispatch => {
  return LikeAPIUtil.destroyLike(like.id)
    .then(() => dispatch(deleteLike(like)));
};