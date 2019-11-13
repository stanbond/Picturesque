import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { withRouter } from 'react-router-dom';
import ProfilePostItem from './profile_post_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  render() {
    let { user } = this.props;

    return (
      <>
      <NavBarContainer/>
        <section className="profile-header">
          <img src={user.profilePhoto} />
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
          </div>
          <div className="posts-grid">
            {this.props.posts.map((post, idx) => {
              <ProfilePostItem
                key={idx}
                post={post} />;
            })} 
          </div>
        </div>
        {/* <CreatePostFormContainer /> */}
      </>
    );
  }

}
export default withRouter(Profile);