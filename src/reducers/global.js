import { SHOW_SNACKBAR, HIDE_SNACKBAR, SET_AUTHENTICATION } from "../actions/globalAction";
const initialState = {
  isAuthenticated: false,
  authUser: {},
  message: '',
  openSnackbar: false,
  variant: 'success'
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true,
        authUser: action.payload
      }

    case SHOW_SNACKBAR:
      return {
        ...state,
        message: action.payload.message,
        openSnackbar: action.payload.openSnackbar,
        variant: action.payload.variant
      }
    case HIDE_SNACKBAR:
      return {
        ...state,
        message: '',
        openSnackbar: false
      }
   default:
    return state
  }
 }