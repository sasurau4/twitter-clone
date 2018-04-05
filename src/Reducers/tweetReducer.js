import { filterTweet, fetchMoreTweets } from '../Actions/actionTypes';
import { dummyTweetsCreate, dummyUsers } from '../Utils/dummy';

const initialState = { userId: '', tweets: dummyTweetsCreate(dummyUsers), users: dummyUsers };

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterTweet:
      return {
        ...state,
        userId: action.payload.userId,
      };

    case fetchMoreTweets:
      console.trace();
      return {
        ...state,
        tweets: [...state.tweets, ...dummyTweetsCreate(state.users)]
      };

    default:
      return state;
  }
};

export default tweetReducer;
