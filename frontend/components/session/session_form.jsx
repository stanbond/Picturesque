import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);  // {user: {username, password}}
    this.props.processForm(user);
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
    // const typeForm = formType === 'login' ? 
    return (
      <div className="">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {/* <div ></div> */}
          <header>{formType}</header>
          
          <ul className="errors">
            {errorsLi}
          </ul>

          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={this.state.username} onChange={this.update('username')} className="signup-input" />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={this.state.password} onChange={this.update('password')} className="signup-input" />

          <button>{linkButton}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;