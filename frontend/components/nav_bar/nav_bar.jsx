import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreate() {
    // debugger
    document.getElementById('postform').className = 'show';
  }

  render() {
    let { logout } = this.props;
    return (
      <div id="navbar" className="main-navbar">
        <div className="sub-navbar">
          <Link className="logo-box" to="/home">
              <div className="nav-ig-icon"></div>
              <div className="nav-ig-logo"></div>
          </Link>
          {/* search bar container will go here */}
          <div className="navbar-menu">
            <div className="create-post-button" onClick={this.handleCreate}></div>
            <Link className="profile-button" to={`/profile/${this.props.currentUser.id}`}></Link>
              {/* <Link to={`/profile/${this.props.currentUser.id}`}></Link> */}
            {/* </div> */}
            <div className="logout-button" onClick={logout}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar; 