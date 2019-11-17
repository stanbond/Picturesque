import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, removeLike } from '../../actions/like_actions';
import likeBar from './like';

const mapStateToProps = (state, ownProps) => {
  let postLikes = state.entities.posts[ownProps.postId].like_ids;
  console.log(state.entities.likes)
  // let filteredLikes = Object.values(state.entities.likes).filter(like =>
  //   postLikes.includes(like.id));
    
  // return ({
  //   likes: filteredLikes,
  //   likers: state.entities.posts[ownProps.postId].liker_ids,
  //   currentUser: state.session.currentUserId
  // });
};

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  removeLike: like => dispatch(removeLike(like))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(likeBar));
