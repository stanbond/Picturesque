import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class SessionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      fullname: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);  // {user: {username, password}}
    this.props.processForm(user).then(() => { 
      this.props.history.push('/home')
    });
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  render() {
    let { errors, formType } = this.props;
    const errorsLi = errors.session.map(error => {
      return <li>{error}</li>
    })

    const linkButton = formType === 'login' ? "Login" : "Sign Up"

    if (formType === 'login'){
      return ( 
        <div className="main-box">
          <div className="splash-content-container">
            <div className="splash-content">
              <div className="ig-logo"></div>
              <div className="signup-login-container"></div>
              <form onSubmit={this.handleSubmit} className="login-form-box">
        
                <div className="signup-form-container">
                <div className="signup-form">
                  <ul className="errors">
                    {errorsLi}
                  </ul>

                  <label></label>
                  <input 
                    type="text" 
                    id="username" 
                    value={this.state.username} 
                    onChange={this.update('username')} 
                    className="signup-input"
                    placeholder="Phone number, username or email" />
                  
                  <label></label>
                  <input 
                    type="password" 
                    id="password" 
                    value={this.state.password} 
                    onChange={this.update('password')} 
                    className="signup-input"
                    placeholder="Password" />
                  
                  <button className="login-button">{linkButton}</button>
                </div>
                </div>
              </form>
              <div className="or-container">
                <div className="or-border"></div>
                <span className="or-txt">OR</span>
                <div className="or-border"></div>
              </div>
              <Link to="/" className="demo-link"> Demo Login</Link>
            </div>
          
            <div className="have-an-account">
              <p className="have-an-account-p">Don't have an account?
                <Link to="/" className="signup-link"> Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="signup-form-container">
          {/* <div className="ig-logo"></div> */}
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="signup-form">

              <ul className="errors">
                {errorsLi}
              </ul>

              <label></label>
              <input
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Mobile Number or Email" />
              
              <label></label>
              <input
                type="text"
                id="fullname"
                value={this.state.fullname}
                onChange={this.update('fullname')}
                className="signup-input"
                placeholder="Full Name" />
              
              <label></label>
              <input 
                type="text" 
                id="username" 
                value={this.state.username} 
                onChange={this.update('username')} 
                className="signup-input"
                placeholder="Username" />
              
              <label></label>
              <input 
                type="password" 
                id="password" 
                value={this.state.password} 
                onChange={this.update('password')} 
                className="signup-input"
                placeholder="Password" />
              
              <button className="login-button">{linkButton}</button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);