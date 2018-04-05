import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { logout } from "../Actions/actionCreator";

class Screen2 extends Component {
  static navigationOptions = {
    title: "Screen2"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "powderblue",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{this.props.navigation.state.params.name}</Text>
        <TouchableOpacity
          onPress={this.props.logout}
          style={styles.touchableStyles}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(Screen2);

const styles = StyleSheet.create({
  touchableStyles: {
    marginTop: 15,
    backgroundColor: "black",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  }
});