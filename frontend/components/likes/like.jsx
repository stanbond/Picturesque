import React from 'react';
class LikeBar extends React.Component {
  constructor(props) {
    super(props);

    this.createLike = this.createLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.renderLikes = this.renderLikes.bind(this);
  }

  createLike() {
    this.props.createLike({
      post_id: this.props.postId
    });
  }

  removeLike() {
    let { likes, currentUser, removeLike } = this.props;

    for (let i = 0; i < likes.length; i++) {
      if (likes[i].user_id === currentUser) {
        removeLike(likes[i]);
        return;
      }
    }
  }

  renderHeart() {
    let { likers, currentUser} = this.props;
    likers = likers || []
    return likers.includes(currentUser) ? (
      <div className="icons">
        {/* <img src='' onClick={this.createLike} /> */}
        <p onClick={this.removeLike} >HEART</p>
      </div>
    ) : (
        <div className="icons">
          {/* <img src='' onClick={this.removeLike} /> */}
          <p onClick={this.createLike} >HEART</p>
      </div>
    );
  }

  renderLikes() {
    let { likes } = this.props;
    likes = likes || []
    if (likes.length === 0) {
      return (
        <p id="num-likes">
          <strong>Be the first to </strong>like this
        </p>
      );
    } else {
      return (<p id="num-likes">{likes.length} likes</p>);
    }
  }

  render() {
    return(
      <div className="like-bar">
        {this.renderHeart()}
        { this.renderLikes()}
      </div>
    )
  }
}
export default LikeBar; 
