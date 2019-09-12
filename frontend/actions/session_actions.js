export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const login = (user) => (dispatch) => (
  APIUtil.login(user).then(response => dispatch(receiveCurrentUser(response)))
    .fail(response => dispatch(receiveErrors(response.responseJSON)))
)

export const logout = () => (dispatch) => (
  APIUtil.logout().then(response => dispatch(logoutCurrentUser()))
)

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(response => dispatch(receiveCurrentUser(response)))
    .fail(response => dispatch(receiveErrors(response.responseJSON)))
)

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});