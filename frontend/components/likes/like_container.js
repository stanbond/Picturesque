import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, removeLike } from '../../actions/like_actions';
import Like from './like';

const mapStateToProps = (state, ownProps) => {
  let postLikes = state.entities.posts[ownProps.postId].like_ids;
  let filteredLikes = Object.values(state.entities.likes).filter(like =>
    postLikes.includes(like.id));

  return ({
    likes: filteredLikes,
    likers: state.entities.posts[ownProps.postId].liker_ids,
    currUser: state.session.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  removeLike: like => dispatch(removeLike(like))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Like));