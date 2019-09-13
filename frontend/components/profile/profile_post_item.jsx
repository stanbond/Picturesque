import React from 'react'; 


class ProfilePostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {} = this.props.post;
    return(
      <div className="profile-post">
        <img src={this.props.post.photoUrl} />
      </div>
    );
  }
}

export default ProfilePostItem;
