import React from 'react';

import TweetItem from './TweetItem';
import { FlatList } from 'react-native';



const TweetsList = ({ tweets, navToProfile, fetchTweets }) => (
  <FlatList
    data={tweets}
    extraData={tweets}
    renderItem={({ item }) => (
      <TweetItem
        tweet={{ ...item }}
        onPress={() => {
          console.log('The User id is' + item.userId);
          navToProfile(item.userId);
        }}
      />
    )}
    onEndReachedThreshold={0.1}
    onEndReached={info => {
      console.log('on Reached!, ', info);
      const dfe = info.distanceFromEnd;
      // inhibit onEndReached triggerd twice
      // TODO: adjust threshold
      if (1 <= dfe) fetchTweets();
    }}
  />
);
export default TweetsList;
