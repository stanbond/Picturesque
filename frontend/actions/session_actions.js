export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const login = (user) => (dispatch) => (
  APIUtil.login(user).then(response => dispatch(receiveCurrentUser(response)))
)

export const logout = () => (dispatch) => (
  APIUtil.logout().then(response => dispatch(logoutCurrentUser()))
)

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(response => dispatch(receiveCurrentUser(response)))
)

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}