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
    
    return (
      <NavBarContainer />
    )
  }
}

export default PostIndex;