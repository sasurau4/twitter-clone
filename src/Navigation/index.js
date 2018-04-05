import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './navigationStack';
import { addListener } from '../Utils/redux';
import { NavigationActions } from 'react-navigation';
// import { logout } from "../Actions/actionCreator";

// navigation component
class AppNavigation extends Component {
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    if (navigationState.stateForLoggedIn.index <= 1) {
      BackHandler.exitApp();
      return;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { navigationState, dispatch, isLoggedIn } = this.props;
    const state = isLoggedIn
      ? navigationState.stateForLoggedIn
      : navigationState.stateForLoggedOut;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.LoginReducer.isLoggedIn,
    navigationState: state.NavigationReducer,
  };
};

export default connect(mapStateToProps)(AppNavigation);
