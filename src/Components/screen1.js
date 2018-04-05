import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from '../Actions/actionCreator';

class Screen1View extends Component {
  // static navigationOptions = {
  //   title: 'Screen1',
  //   gesturesEnabled: false,
  //   headerLeft: null,
  // };

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: 'screen2',
      params: { name: 'Shubhnik' },
    });
    this.props.navigation.dispatch(navigateToScreen2);
  };
  
  navigateToFeedScreen = () => {
    const nav = NavigationActions.navigate({
      routeName: 'feed',
    });
    this.props.navigation.dispatch(nav);
  }

  render() {
    const {
      counterCount,
      incrementAction,
      decrementAction,
      counterNumber,
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellowgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{counterCount}</Text>
        <Text>{counterNumber}</Text>
        <View style={{ height: 100, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => incrementAction()}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{ textDecorationLine: 'underline', fontWeight: '600' }}>
              INCREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decrementAction()}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{ textDecorationLine: 'underline', fontWeight: '600' }}>
              DECREMENT
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: 'indigo',
          }}
          onPress={this.navigate}>
          <Text style={{ fontSize: 23, fontWeight: '600', color: 'white' }}>
            Screen2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: 'indigo',
            marginTop: 20,
          }}
          onPress={this.navigateToFeedScreen}>
          <Text style={{ fontSize: 23, fontWeight: '600', color: 'white' }}>
            Go to Feed Screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter,
  counterNumber: state.CounterReducer.counterNumber,
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction,
};

const Screen1 = connect(mapStateToProps, mapDispatchToProps)(Screen1View);

export default Screen1;
