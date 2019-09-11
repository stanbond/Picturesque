import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    let { posts } = this.props;
    return (
      <>
        <NavBarContainer />
        <div className="feed">
          {/* { posts.map( (post) => {
            let user = this.props.users[post.user_id];
            return user
          })} */}
        </div>
      </>
    )
  }
}

export default PostIndex;