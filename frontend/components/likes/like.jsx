import React from 'react';
class LikeBar extends React.Component {
  constructor(props) {
    super(props);
    this.createLike = this.createLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.renderLikes = this.renderLikes.bind(this);
    this.state = { 
      liked: this.props.likers.includes(this.props.currentUser),
      count: this.props.likes.length}
  }

  createLike() {
    // console.log(this.props)
    this.props.createLike({
      post_id: this.props.postId
    }).then(this.setState({liked: true , count: this.state.count+1}))
  } 

  removeLike() {
    let { likes, currentUser, removeLike } = this.props;

    for (let i = 0; i < likes.length; i++) {
      if (likes[i].user_id === currentUser) {
        removeLike(likes[i]).then(this.setState({liked: false , count: this.state.count-1}))
        return;
      }
    }
  }

  renderHeart() {
    let { likers, currentUser} = this.props;
    // likers = likers || []
    // console.log(this.props.postId)
    return this.state.liked ? (
      <div className="icons">
        {/* <img src='' onClick={this.createLike} /> */}
        <p onClick={this.removeLike} >LIKED</p>
      </div>
    ) : (
        <div className="icons">
          {/* <img src='' onClick={this.removeLike} /> */}
          <p onClick={this.createLike} >EMPTY HEART</p>
        </div>
    );
  }

  renderLikes() {
    let { likes } = this.props;
    // likes = likes || []
    if (this.state.count === 0) {
      return (
        <p id="num-likes">
          <strong>Be the first to </strong>like this
        </p>
      );
    } else {
      return (<p id="num-likes">{this.state.count} likes</p>);
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
