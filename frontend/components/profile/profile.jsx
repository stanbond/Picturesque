import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { withRouter } from 'react-router-dom';
import ProfilePostItem from './profile_post_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
    this.renderPost = this.renderPost.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchAllPosts();
  }

  renderPost() {
    return (
    Object.values(this.props.posts).reverse().map((post, idx) => {
      if(post === undefined)
        return;
      if(post.user_id === this.props.user.id) {
        return <img key={idx} src={post.photoUrl} />
        // <li key={idx}>{post.caption}</li>;
      } else{
        return ""
      }
    })
    )
  }

  render() {
    let { user } = this.props;
    return (
      <>
      <NavBarContainer/>
        <section className="profile-header">
          <img className="pro-pic" src={this.props.user.profilePhoto} />
          <div>
            <h2>{user.username}</h2>
            <p><strong>{user.postIds.length}</strong>posts</p>
            <p>{user.bio}</p>
          </div>
        </section>
        <div className="profile-posts">
          <div className="profile-menu">
            <div className="posts">
              <p>POSTS</p>
          
          </div>
          <div className="posts-grid">
            {this.renderPost()}
            {/* {this.props.posts.map((post, idx) => {
              <ProfilePostItem
                key={idx}
                post={post} />;
            })}  */}
          </div>
        </div>
        </div>
        {/* <CreatePostFormContainer /> */}
      </>
    );
  }

}
export default withRouter(Profile);