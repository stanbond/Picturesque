import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? <Component {...props} /> : <Redirect to='/home' />
    )}
  />
);
// protected route
const Protected = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={path}
      render={props => (
        !loggedIn ? <Redirect to='/login' /> : <Component {...props} />
      )}
    />
  )
};

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));