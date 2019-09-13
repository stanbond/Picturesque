import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import PostIndexContainer from '../components/posts/post_index_container';
import ProfileContainer from './profile/profile_container';


const App = () => (
  <div>
    <GreetingContainer /> 
    
    <AuthRoute exact path='/' component={SplashContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <Switch>
      <ProtectedRoute path='/home' component={PostIndexContainer}/>
      <ProtectedRoute path='/profile/:id' component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;