const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
          console.log('checked login');
        return {
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  