
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import Spinner from './src/components/Spinner';

import Home from './src/screens/HomeScreen';

import firebase from 'firebase';

import { apiKey, appId, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './constants';


export default class App extends Component {
  state = {
    loggedIn: null
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: apiKey,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });

  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return <Home />
      case false:
        return <Login />
      default:
        return <Spinner size="large" />
    }
  }

  render() {

    return (

      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        {
          this.renderContent()
        }

      </View>

    );
  }
}
