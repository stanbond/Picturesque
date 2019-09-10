import { fetchAllPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostIndex from './post_index';

const mapStateToProps = state => ({
  posts: state.entities.posts,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex); 