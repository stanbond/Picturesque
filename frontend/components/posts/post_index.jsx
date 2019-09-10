import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    
    return (
      <p> hello world </p>
    )
  }
}

export default PostIndex;