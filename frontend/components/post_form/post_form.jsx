import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.renderSumbit = this.renderSumbit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handlePhoto(event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photo: file, preview: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let button = event.target;
    let parent = button.parentElement;
    let loader = document.createElement('p');
    loader.innerText = 'posting';
    loader.classList.add('dummy-submit-button');
    parent.removeChild(button);
    parent.appendChild(loader);

    const formData = new FormData();
    // const filledForm = append(formData, { 'post[location]': this.state.location} );
    formData.append('post[location]', this.state.location);
    formData.append('post[caption]', this.state.caption);
    formData.append('post[photo]', this.state.photo);
    this.props.action(formData)
      .then(() => {
        this.setState({
          location: '',
          caption: '',
          photo: null,
          preview: null
        });
        document.getElementById('postform').className = 'hide';
      });
  }

  closeModal() {
    this.setState({
      location: '',
      caption: '',
      photo: null,
      preview: null
    });
    document.getElementById('postform').className = 'hide';
  }

  renderSumbit() {
    if (this.state.caption === '') {
      return (
        <div>
          <p className="dummy-submit-button">
            Post
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p onClick={this.handleSubmit}
            className="submit-button">
            Post
          </p>
        </div>
      );
    }
  }

  renderForm() {
    const errors = this.props.errors ? (
      <ul className="errors">
        {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    ) : (
        <></>
      );
    if (this.state.photo === null) {
      return (
        <div className="post-upload-modal">
          {/* <img src="/images/camera.png" /> */}
          <p className="post-upload-header">Upload a Photo</p>
          <div className="post-upload-msg">
            <p>Share photos that you'd like your friends to see</p>
          </div>
          <label>
            <p>Upload</p>
            <input type="file"
              accept="image/*"
              onChange={this.handlePhoto} />
          </label>
        </div>
      );
    } else {
      return (
        <div className="post-upload-modal">
          <div className="post-upload-form">

            <div className="post-preview">
              <img src={this.state.preview} />
            </div>
            <div className="post-user-input">
              <p className="post-title">New Picturesque Post</p>
              <p className="post-details">Details</p>

              <textarea
                value={this.state.caption}
                placeholder="Write a caption..."
                onChange={this.handleInput('caption')} />
              <input type="text"
                value={this.state.location}
                placeholder="Add location"
                onChange={this.handleInput('location')} />
              {this.renderSumbit()}
              {errors}
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div id="postform" className='hidden'>
        {this.renderForm()}
        <div className="modal-screen"
          onClick={this.closeModal}>
        </div>
      </div>
    );
  }
}
export default PostForm;