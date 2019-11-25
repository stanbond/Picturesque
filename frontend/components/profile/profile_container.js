import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';
import { fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.id];
  let posts = state.entities.posts;
  console.log(state);
  if (user) {
    posts = user.postIds.map(
      id => state.entities.posts[id]
    );
  } else {
    posts = [];
  }
  return ({
    user,
    posts
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);