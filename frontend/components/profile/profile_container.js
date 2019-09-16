import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.id];
  let posts = state.entities.posts;
  // let posts;
  // if (user) {
  //   posts = user.postIds.map(
  //     id => state.entities.posts[id]
  //   );
  // } else {
  //   posts = [ undefined ];
  // }

  return ({
    user,
    posts
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);