import React from 'react';

import { Container } from 'native-base';
import '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';
import TweetsList from './TweetsList';
import { connect } from 'react-redux';
import {
  filterTweetAction,
  fetchMoreTweetsAction,
} from '../Actions/actionCreator';

const FeedScreen = ({ tweets, navToProfile, fetchTweets }) => (
  <Container style={{backgroundColor: "#FFF"}}>
    <TweetsList
      tweets={[...tweets]}
      navToProfile={navToProfile}
      fetchTweets={fetchTweets}
    />
  </Container>
);

const mapStateToProps = state => ({
  tweets: state.TweetReducer.tweets,
});

const mapDispatchToProps = dispatch => ({
  navToProfile: userId => {
    dispatch(filterTweetAction(userId));
    dispatch(
      NavigationActions.navigate({
        routeName: 'profile',
      })
    );
  },
  fetchTweets: () => {
    dispatch(fetchMoreTweetsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
