import React from 'react';
import { Container, Thumbnail, H2, Text, Icon, Button } from 'native-base';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import TweetsList from './TweetsList';
import { connect } from 'react-redux';

const ProfileScreen = ({ user, tweets, navToProfile, fetchTweets }) => (
  <Container style={styles.mainColor}>
    <ScrollView>
      <View contentContainerStyle={styles.container}>
        <Image
          source={{
            uri: user.bannerImageUrl,
          }}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.subContainer}>
          <Thumbnail
            large
            source={{
              uri: user.avatorImageUrl,
            }}
            style={styles.avator}
          />
          <View style={[styles.iconButtons, styles.profContainer]}>
            <TouchableOpacity style={styles.roundedButton}>
              <Icon name={'ios-settings-outline'} style={styles.iconInButton} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundedButton}>
              <Icon name={'ios-mail-outline'} style={styles.iconInButton} />
            </TouchableOpacity>
            <Button bordered rounded style={styles.textButton}>
              <Text style={styles.textInButton}>Follow</Text>
            </Button>
          </View>
          <View style={styles.profContainer}>
            <H2 style={styles.profileH2}>{user.name}</H2>
            <Text style={styles.grayText}>@{user.id}</Text>
          </View>
          <View style={styles.profContainer}>
            <View style={styles.phraseContainer}>
              <Text>{user.phrase}</Text>
            </View>
            <View style={styles.profBelowItem}>
              <Icon name={'ios-pin-outline'} style={styles.belowIcon} />
              <Text style={styles.grayText}>{user.location}</Text>
            </View>
            <View style={styles.profBelowItem}>
              <Icon name={'ios-link-outline'} style={styles.belowIcon} />
              <Text style={styles.grayText}>{user.url}</Text>
            </View>
          </View>
          <View style={styles.profFooter}>
            <View style={styles.counterItem}>
              <Text style={styles.counter}>{user.friendsCount}</Text>
              <Text style={styles.grayText}>Following</Text>
            </View>
            <View style={styles.counterItem}>
              <Text style={styles.counter}>{user.followersCount}</Text>
              <Text style={styles.grayText}>Followers</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <TweetsList
          tweets={[...tweets]}
          navToProfile={navToProfile}
          fetchTweets={fetchTweets}
        />
      </View>
    </ScrollView>
  </Container>
);

const mapStateToProps = state => ({
  user: state.TweetReducer.users.find(u => u.id === state.TweetReducer.userId),
  tweets: state.TweetReducer.tweets.filter(
    t => t.userId === state.TweetReducer.userId
  ),
});

const mapDispatchToProps = () => ({
  navToProfile: () => {
    console.log('navToProfile Event');
  },
  fetchTweets: () => {
    console.log('fetch Tweets event from Profile Screen');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  mainColor: {
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
  },
  subContainer: {
    margin: 10,
  },
  profContainer: {
    marginBottom: 10,
  },
  backgroundImage: {
    width: null,
    height: 150,
  },
  avator: {
    position: 'absolute',
    top: -50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  iconButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  roundedButton: {
    borderWidth: 1,
    borderColor: 'rgb(29, 161, 242)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginLeft: 10,
  },
  iconInButton: {
    fontSize: 30,
    color: 'rgb(29, 161, 242)',
  },
  textButton: {
    borderColor: 'rgb(29, 161, 242)',
    marginLeft: 10,
    borderWidth: 2,
  },
  textInButton: {
    fontWeight: 'bold',
    color: 'rgb(29, 161, 242)',
  },
  grayText: {
    color: '#a9a9a9',
  },
  phraseContainer: {
    marginBottom: 10,
  },
  profBelowItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  belowIcon: {
    color: '#a9a9a9',
    fontSize: 20,
    marginRight: 5,
  },
  divider: {
    height: 10,
    backgroundColor: 'rgb(230, 236, 240)',
  },
  profFooter: {
    flex: 1,
    flexDirection: 'row',
  },
  counterItem: {
    flexDirection: 'row',
    marginRight: 15,
  },
  counter: {
    marginRight: 5,
    fontWeight: 'bold',
  }
});
