'use strict';

import routes from '../config/routes.json';
import styles from '../config/styles.json';
import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  StyleSheet,
} from 'react-native';

class SplashPage extends Component {
  componentWillMount () {
    var navigator = this.props.navigator;
    setTimeout (() => {
        navigator.push(routes[1]);
    }, 2000);
  }

  render () {
      return (
        <View style={styles.container}>
          <StatusBar hidden={false}/>
          <Image source={require('../img/logo.png')}></Image>
        </View>
      );
  }
}

module.exports = SplashPage;
