'use strict';

import routes from '../config/routes.json';
import settings from '../config/settings.json';
import styles from '../config/styles.json';
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Button
} from 'react-native';

class LoginPage extends Component {
  componentWillMount () {
    this.navigator = this.props.navigator;
  }

  constructor(props) {
    super(props);
    this.state = {
      Title: props.route.title,
      TitleHeight: props.titleHeight,
      username: '',
      password: ''
    };
  }

  _onLoginPress(event) {
    let obj = {
      "email": this.state.username,
      "password": this.state.password
    };

    fetch(settings.server + "/login",
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      }
    )
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.token !== undefined) {
        routes[2].token = responseData.token;
        this.navigator.push(routes[2]);
      } else {
        //alerta de erro
      }
    })
    .done();
  }

  render() {
      return (
        <View style={styles.container_login}>
          <StatusBar
            hidden={false}/>
          <Text style={[
            styles.title,
            {
              height: this.state.TitleHeight,
              lineHeight: this.state.TitleHeight,
              width: Dimensions.get('window').width
            }]}>
              {this.state.Title}
          </Text>
          <View style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50
          }}>
            <TextInput
              style={{height: 40, padding: 10}}
              placeholder="Username"
              ref="username"
              onChangeText={(username) => this.setState({username})}
              width={4*(Dimensions.get('window').width/5)}
              borderWidth={1}
              borderColor="forestgreen" />
            <TextInput
              style={{height: 40, padding: 10}}
              placeholder="Password"
              ref="password"
              onChangeText={(password) => this.setState({password})}
              width={4*(Dimensions.get('window').width/5)}
              secureTextEntry={true}
              marginTop={20}
              borderWidth={1}
              borderColor="forestgreen" />
            <Text
              style={[styles.btn, styles.btn_login, {
                width: 4*(Dimensions.get('window').width/5)
              }]}
              onPress={this._onLoginPress.bind(this)} >
              Do Login
            </Text>
          </View>
        </View>
      );
  }
}

module.exports = LoginPage;
