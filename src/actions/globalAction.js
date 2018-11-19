import { callApi } from "../services/callApi";

export const LOGIN = 'LOGIN';
export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

export const loginAction = (email, password) => {
  return async dispatch => {
    return callApi('/api/auth/login', 'POST', {email, password})
      .then((result) => {
        if (result.user) {
          dispatch({
            type: SET_AUTHENTICATION,
            payload: result.user
          });
          dispatch(showSnackbar('success', 'Login successful'));;
        } else {
          dispatch(showSnackbar('error', result.message));
        }
      })
      .catch((error) => {
        dispatch(showSnackbar('error', error.message));
      });
  }
}

export const showSnackbar = (variant = 'success', message) => {
  return dispatch => {
    dispatch({
      type: SHOW_SNACKBAR,
      payload: {
        openSnackbar: true,
        message,
        variant
      }
    })
  }
}

export const hideSnackbar = () => {
  return dispatch => {
    dispatch({
      type: HIDE_SNACKBAR
    })
  }
}
// demo_assignment@gmail.com
// samplepassword