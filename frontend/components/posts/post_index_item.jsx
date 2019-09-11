import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="post-item">
        <div className="post-header">
            {/* profile pic link to user profile */}
        </div>
        <div className="user-info">
          <p>{this.props.user.username}</p>
            {/* link to profile */}
          <p>{this.props.post.location}</p>
        </div>
        <div className="post-img">
          {/* image goes here */}
        </div>
        {/* likes/comments logic goes here */}
      </div>
      </>
    )
  }

}

export default PostIndexItem; 