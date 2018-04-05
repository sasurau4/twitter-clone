import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppNavigation from './src/Navigation/index';

// for debug
import { login } from './src/Actions/actionCreator';
// import { NavigationActions } from 'react-navigation';
import { fetchMoreTweetsAction } from './src/Actions/actionCreator';

// store
import AppReducer from './src/Reducers/index';

const store = createStore(AppReducer);

// store.dispatch(login('hogehoge@test.com', 'test'));

// general store logger
store.subscribe(() => {
  console.log(store.getState());
});

// for debug
// store.dispatch(
//   NavigationActions.navigate({
//     routeName: 'profile',
//     params: { userId: "debugger_dayo" },
//   })
// );

// for debug
// store.dispatch(fetchMoreTweetsAction())

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
