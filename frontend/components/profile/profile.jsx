import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { withRouter } from 'react-router-dom';
import ProfilePostItem from './profile_post_item';
import PostForm from '../post_form/post_form_container'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      profilePhoto: null
    };
    this.renderPost = this.renderPost.bind(this);
    // this.updateProPic = this.updateProPic.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.fileHandler = this.fileHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchAllPosts();
  }

  renderPost() {
    return (
      Object.values(this.props.posts).reverse().map((post, idx) => {
        if (post === undefined)
          return;
        if (post.user_id === this.props.user.id) {
          return <div className="profile-post-item">
          <img key={idx} src={post.photoUrl} />
           {/* <li key={idx}>{post.caption}</li>; */}
          </div>
        } else {
          return ""
        }
      })
    )
  }
  // fileHandler(event) {
  //   const file = event.target.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({ photo: file, preview: fileReader.result });
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
    
  //   let button = event.target;
  //   let parent = button.parentElement;
  //   let loader = document.createElement('p');
  //   loader.innerText = 'posting';
  //   loader.classList.add('dummy-submit-button');
  //   parent.removeChild(button);
  //   parent.appendChild(loader);

  //   const formData = new FormData();
  //   // const filledForm = append(formData, { 'post[location]': this.state.location} );
  //   formData.append('user[profilePhoto]', this.state.profilePhoto);
    
  //   this.props.action(formData)
  //     .then(() => {
  //       this.setState({
  //         profilePhoto: null,
  //         preview: null
  //       });
  //       document.getElementById('postform').className = 'hide';
  //     });
  // }
  // fileUploadHandler() {
  //   this.handleSubmit()
  // }


  // updateProPic() {
  //   return <label onClick={this.fileUploadHandler}>
  //           <p>Upload</p>
  //           <input type="file"
  //             accept="image/*"
  //             onChange={this.fileHandler} />
  //         </label>
  // }

  render() {
    let { user } = this.props;
    if (user) return (
      <>
        <NavBarContainer />
        <section className="profile-header">
          <img className="pro-pic" src={this.props.user.profilePhoto} />
          {/* <label>
            <p>Upload</p>
            <input type="file"
              accept="image/*"
              onChange={this.fileHandler} />
          </label> */}
          <div className="pro-user-info">
            <h2 className="pro-username">{user.username}</h2>
            <p><strong>{user.postIds.length}</strong> posts</p>
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
              {this.renderPost()}
              {/* {this.props.posts.map((post, idx) => {
              <ProfilePostItem
                key={idx}
                post={post} />;
            })}  */}
            </div>
          
        </div>
        <PostForm />
        <div className="footer">
          {/* <a href="https://stanbond.dev">ABOUT ME</a> */}
          <a href="https://github.com/stanbond">GITHUB</a>
          <a href="https://www.linkedin.com/in/stanbondarenko/">LINKEDIN</a>
          <p>2019 PICTURESQUE</p>
        </div>
      </>
    );
  }
}
export default withRouter(Profile);