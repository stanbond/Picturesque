import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

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
      <div className="profile-header">
        {/* <img src={user.profilePhoto} /> */}
          <h2>{user.username}</h2>
          <p><strong>{user.postIds.length}</strong>posts</p>
          <p>{user.bio}</p>
      </div>
      </>
    );
  }

}
export default Profile;