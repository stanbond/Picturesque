import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexItemContainer from './post_index_item_container';
import PostFormContainer from '../post_form/post_form_container'

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    let posts = Object.values(this.props.posts);
    return (
      <>
        <NavBarContainer />
        <div className="feed">
          {posts.map((post, idx) => {
            let user = this.props.users[post.user_id];
            return <PostIndexItemContainer
              key={idx}
              user={user}
              post={post} />;
          })} 
        </div>
        <PostFormContainer />
      </>
    )
  }
}

export default PostIndex;