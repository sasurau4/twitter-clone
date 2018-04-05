import React from 'react';
import { logout } from '../Actions/actionCreator';
import { connect } from 'react-redux';
import { Button, View } from 'react-native';

const LogoutButton = ({ logout }) => (
  <View style={{ paddingRight: 10 }}><Button title="Logout" onPress={logout}/></View>
);

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(LogoutButton);
