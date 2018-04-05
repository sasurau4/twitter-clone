import { NavigationActions } from 'react-navigation';
import AppNavigator from '../Navigation/navigationStack';
import { Login, Logout } from '../Actions/actionTypes';

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
  'login'
);
const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams(
  'feed'
);

const stateForLoggedOut = AppNavigator.router.getStateForAction(
  ActionForLoggedOut
);
const stateForLoggedIn = AppNavigator.router.getStateForAction(
  ActionForLoggedIn
);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        ),
      };

    case Logout:
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.init({ routeName: 'login' })],
          })
        ),
      };

    default:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.stateForLoggedIn
        ),
      };
  }
};

export default navigationReducer;
