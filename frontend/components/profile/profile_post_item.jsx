import React from 'react'; 
import { withRouter } from 'react-router-dom';

class ProfilePostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let {like_ids} = this.props.post;
    // console.log(this.props.post)
    return(
      <div className="profile-post">
        
        <img src={this.props.post.photoUrl} />
        {/* <div>{like_ids.length}</div> */}
      </div>
    );
  }
}

export default ProfilePostItem;
