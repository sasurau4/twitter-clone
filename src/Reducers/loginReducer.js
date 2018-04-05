import { Login, Logout } from '../Actions/actionTypes';

const initialState = { isLoggedIn: false };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:　{
      const { email, password } = action;
      if (email === "hogehoge@test.com" && password === "test") {
        return { ...state, isLoggedIn: true };
      } else {
        return state;
      }
    }
    case Logout:
      return { ...state, isLoggedIn: false };
      
    default:
      return state;
  }
};

export default loginReducer;
