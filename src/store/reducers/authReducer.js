const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('Login error');
      return {
        ...state,
        authError: action.type
      }
    case 'LOGIN_SUCCESS':
      console.log('Login succes');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Logout success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_SUCCESS':
      console.log('Signup success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('Signup error');
      return {
        ...state,
        authError: action.error.message
      }
    default:
      return state;   
  }
}

export default authReducer;