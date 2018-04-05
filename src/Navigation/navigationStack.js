import React from "react";
import { StackNavigator } from 'react-navigation';
import Screen1 from '../Components/screen1';
import Screen2 from '../Components/screen2';
import Login from '../Components/LoginScreen';
import FeedScreen from '../Components/FeedScreen';
import ProfileScreen from '../Components/ProfileScreen';
import LogoutButton from '../Components/LogoutButton';
// import { Button, View } from 'react-native';

// navigation stack
const AppNavigator = StackNavigator({
  login: {
    screen: Login,
  },
  screen1: {
    screen: Screen1,
    navigationOptions: {
      title: 'Debug Screen',
      gesturesEnabled: false,
      headerRight: (<LogoutButton/>),
    },
  },
  screen2: {
    screen: Screen2,
  },
  feed: {
    screen: FeedScreen,
    navigationOptions: {
      title: 'My Feed',
      headerLeft: null,
    },
  },
  profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile & Tweets',
      headerRight: (<LogoutButton/>),
    },

  },
});

export default AppNavigator;
