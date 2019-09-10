import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleCreate() {
    document.getElementById('postform').className = 'show';
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div id="navbar" className="main-navbar">
        <div className="sub-navbar">
          <div className="nav-idx">
            <Link to="/home">
              <div className="nav-ig-icon"></div>
              <div className="nav-ig-logo"></div>
            </Link>
          </div>
          {/* search bar container will go here */}
          <div className="navbar-menu">
            <div className="create-post-button" onClick={this.handleCreate}></div>
            <div className="profile-button"></div>
            <div className="logout-button" onClick={this.handleLogout}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar; 