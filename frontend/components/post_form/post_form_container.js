import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  errors: state.errors.posts,
  post: {
    location: '',
    caption: '',
    photo: null,
    preview: null
  }
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm)); 