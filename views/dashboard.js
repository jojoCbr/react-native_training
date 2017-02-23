'use strict';

import routes from '../config/routes.json';
import styles from '../config/styles.json';
import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Title: props.route.title,
      TitleHeight: props.titleHeight
    };
  }

  render () {
      return (
        <View style={styles.container_dashboard}>
          <StatusBar hidden={false}/>
          <Text style={[
            styles.title,
            {
              height: this.state.TitleHeight,
              lineHeight: this.state.TitleHeight,
              width: Dimensions.get('window').width
            }]}>
              {this.state.Title}
          </Text>
          <View>
            <Text style={[
              styles.dash,
              {
                width: Dimensions.get('window').width * 0.9
              }
            ]}>
              Shopping Cart:
            </Text>
          </View>
        </View>
      );
  }
}

module.exports = DashBoard;
