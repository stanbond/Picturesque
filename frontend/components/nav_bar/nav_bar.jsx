import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreate() {
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
            <div className="profile-button"></div>
            <div className="logout-button" onClick={logout}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar; 