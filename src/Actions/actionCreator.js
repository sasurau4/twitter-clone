import {
  incrementCounter,
  decrementCounter,
  Login,
  Logout,
  filterTweet,
  fetchMoreTweets,
  fetchUsers,
} from './actionTypes';

const incrementAction = () => ({
  type: incrementCounter,
});

const decrementAction = () => ({
  type: decrementCounter,
});

const login = (email, password) => ({
  type: Login,
  email: email,
  password: password,
});

const logout = () => ({
  type: Logout,
});

const filterTweetAction = userId => ({
  type: filterTweet,
  payload: {
    userId: userId,
  },
});

const fetchMoreTweetsAction = () => ({
  type: fetchMoreTweets,
});

export {
  incrementAction,
  decrementAction,
  login,
  logout,
  filterTweetAction,
  fetchMoreTweetsAction,
};
