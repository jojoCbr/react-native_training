/**
 * ShopShop React Native App
 * https://github.com/facebook/react-native
 * @flow
 * by: Jorge Filipe Ferreira Oliveira
 * mail: jffo1984@gmail.com
 */
'use strict';

import routes from './config/routes.json';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar,
  Platform
} from 'react-native';

var SplashPage = require('./views/splash.js');
var LoginPage = require('./views/login.js');
var DashBoard = require('./views/dashboard.js');

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default class ShopShop extends Component {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: 'forestgreen', height: STATUSBAR_HEIGHT}}>
          <StatusBar
             backgroundColor="#000000"
             barStyle="light-content"
          />
        </View>
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }

  renderScene ( route, navigator ) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
        return (
            <SplashPage
                navigator={navigator}/>
        );
    }
    else if (routeId === 'LoginPage') {
        return (
            <LoginPage
              route={route}
              titleHeight={APPBAR_HEIGHT}
              navigator={navigator} />
        );
    }
    else if (routeId === 'DashBoard') {
        return (
            <DashBoard
              route={route}
              titleHeight={APPBAR_HEIGHT}
              navigator={navigator}
              token={route.token} />
        );
    }
  }
}

AppRegistry.registerComponent('ShopShop', () => ShopShop);
