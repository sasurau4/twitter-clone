import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Left, Body, Thumbnail } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  leftContainer: {
    alignSelf: 'flex-start',
    paddingTop: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subInfo: {
    marginLeft: 5,
    fontSize: 14,
    color: 'rgb(101, 119, 134)',
  },
  mainArea: {
    marginRight: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justfyContent: 'flex-start',
    alignItems: 'center',
  },
  touchableIconAndNumber: {
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: 'rgb(101, 119, 134)',
  },
  countNumber: {
    marginLeft: 10,
    color: 'rgb(101, 119, 134)',
  },
  icons: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justfyContent: 'space-between',
  },
});

const TweetItem = ({ tweet, onPress }) => (
  <ListItem avatar button onPress={onPress}>
    <Left style={styles.leftContainer}>
      <Thumbnail small source={{ uri: tweet.userAvatorImageUrl }} />
    </Left>
    <Body style={styles.mainArea}>
      <View style={styles.container}>
        <Text style={styles.userName}>{tweet.userName}</Text>
        <Text style={styles.subInfo}>@{tweet.userId}</Text>
        <Text style={styles.subInfo}>{tweet.contributedTime}</Text>
      </View>
      <Text>{tweet.sentences}</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.touchableIconAndNumber}>
          <View style={styles.iconContainer}>
            <FontAwesome name="comment-o" style={styles.icon} />
            <Text style={styles.countNumber}>{tweet.replyCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableIconAndNumber}>
          <View style={styles.iconContainer}>
            <FontAwesome name="retweet" style={styles.icon} />
            <Text style={styles.countNumber}>{tweet.retweetCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableIconAndNumber}>
          <View style={styles.iconContainer}>
            <FontAwesome name="heart-o" style={styles.icon} />
            <Text style={styles.countNumber}>{tweet.favoriteCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableIconAndNumber}>
          <View style={styles.iconContainer}>
            <FontAwesome name="share-alt" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </Body>
  </ListItem>
);

export default TweetItem;
