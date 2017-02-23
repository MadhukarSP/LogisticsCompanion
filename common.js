import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {StyleSheet, Text, View} from 'react-native';
import Login from "./components/Login"
import Home from "./components/Home" 

export default class extends React.Component {
  render() {
    return <Router>
              <Scene key="root">
                <Scene key="login" component={Login} title="Klarx"/>
                <Scene key="home" component={Home} title="Klarx"/>
              </Scene>
           </Router>
  }
}
