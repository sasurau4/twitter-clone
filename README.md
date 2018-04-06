# twitter-clone
This is Twitter Clone made with React Native, Redux, React Navigation made by expo snack.
[expo snack](https://snack.expo.io/@sasurau4/twitter-clone)

This App is example of learning React Native Fundamentals.
Some features and views only implemented.

## How to use
You start up this application and enter below. 
userName : `hogehoge@test.com`
password : `test`

you enter Application like twitter!


## Contents
This Application consists of 4 screens. 

- AppNavigation Screen
- Login Screen
- Feed Screen
- Profile Screen

### AppNavigation Screen
This Screen controls front screen using React Navigation and Redux.
Refer to isLoggedIn state and pick navigationState.

### Login Screen
This Screen is Form.
If you tapped Login button, dispatch login action.
In loginReducer, check email and password and if two inputs are correct, return isLoggedIn changed `true`.

### Feed Screen
This Screen consists of TweetsList Component.
Tweets are dummy made by FakerJS.
Scrolled feed bottom, new 10 tweets apperared.
Touched a tweet, navigate to Profile Screen of person who the tweet posted.

### Profile Screen
Profile Screen consists of 2 Component, one is Profile and one is the person's own tweets.
If you want to Logout, Header Right button pressed then you return Login Screen and never back Profile Screen. 
You can touched any buttons and tweets but nothing to happen.


## Dependencies
- React Native
- NativeBase
- FakerJS
- Redux
- React Navigation

