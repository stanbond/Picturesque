import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container';

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  // handleDelete() {
  //   let {
  //     deletePost } = this.props;
  //   deletePost(post)
  // }

  renderCaption() {
    let { caption } = this.props.post;
      return (
        <p>
          <strong>{this.props.user.username} </strong>
          {caption}
        </p>
      );
  }
  
  render() {
    return (
      <>
      <div className="post">
        <header>
          <div className="post-header">
              <Link to={`/profile/${this.props.user.id}`}>
                <img src={this.props.user.profilePhoto} />
              </Link>
          </div>
          <div className="user-info-post">
              <Link to={`/profile/${this.props.user.id}`}>
              <p className="username">{this.props.user.username}</p>
              </Link>
              {/* link to profile */}
            <p className="location ">{this.props.post.location}</p>
          </div>
        </header>
        {/* <div placeholder={"delete"}>{this.handleDelete}</div> */}
        <div className="post-img">
            <img src={this.props.post.photoUrl}/>
        </div>
          <div className="post-bottom">
            <LikeContainer postId={this.props.post.id} />
            <div className="caption">
              {this.renderCaption()}
            </div>
          </div>
      </div>
      </>
    )
  }
}

export default PostIndexItem; 