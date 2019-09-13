import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import {
  removePost
} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

// const mapDispatchToProps = dispatch => ({
//   deletePost: post => dispatch(removePost(post))
// }); 

export default connect(mapStateToProps)(PostIndexItem);