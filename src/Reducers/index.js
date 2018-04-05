import { combineReducers } from 'redux';
import NavigationReducer from './navigationReducer';
import LoginReducer from './loginReducer';
import CounterReducer from './counterReducer';
import TweetReducer from './tweetReducer';

const AppReducer = combineReducers({
  CounterReducer,
  NavigationReducer,
  LoginReducer,
  TweetReducer,
});

export default AppReducer;
