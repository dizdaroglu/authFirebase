import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import firebase from 'firebase';

export default class HomeScreen extends Component {

    _signout = () => {

        firebase.auth().signOut();
    }
    render() {
        return (
            <LinearGradient style={styles.container} colors={['#f05d00', '#f6b436', '#fff']}>
                <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={() => this._signout()}>
                    <Text style={styles.text}> Sign Out </Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        elevation: 8
    },
    text: {
        fontWeight: '600'
    }
})

