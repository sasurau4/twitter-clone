import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { login } from '../Actions/actionCreator';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Icon,
  H1,
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    color: 'rgb(29, 161, 242)',
    fontSize: 40,
  },
  h1: {
    flex: 1,
    marginVertical: 10,
  },
  formItemContainer: {
    flex: 1,
    marginVertical: 10,
  },
  formSubmitButton: {
    backgroundColor: 'rgb(29, 161, 242)',
  },
  formSubmitButtonText: {
    fontWeight: 'bold',
  },
});

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    email: '',
    password: '',
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  render() {
    return (
      <Container>
        <Content>
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <Icon name="logo-twitter" style={styles.logo} />
            </View>
            <View style={styles.container}>
              <H1 style={styles.h1}>Log in to Twitter Clone</H1>
            </View>
            <View style={styles.container}>
              <Button transparent>
                <Text>Forgot password?</Text>
              </Button>
            </View>
            <Form>
              <Item rounded style={styles.formItemContainer}>
                <Input
                  placeholder="Phone, email, or username"
                  onChangeText={this.handleEmail}
                />
              </Item>
              <Item rounded style={styles.formItemContainer}>
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={this.handlePassword}
                />
              </Item>
              <Button
                primary
                rounded
                onPress={() =>
                  this.props.login(this.state.email, this.state.password)}
                style={[styles.formItemContainer, styles.formSubmitButton]}>
                <Text style={styles.formSubmitButtonText}>Log in</Text>
              </Button>
            </Form>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

const Login = connect(null, mapDispatchToProps)(LoginScreen);

export default Login;
