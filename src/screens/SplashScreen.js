import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default class SplashScreen extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        animation: new Animated.Value(0)
    }

    componentDidMount() {
        this.startAnimation();
    }
    startAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.animation, {
                toValue: height / 3,
                duration: 2000
            })
        ]).start(() => {
            this.props.navigation.navigate('App')
        })
    }
    render() {
        const animatedStyles = {
            opacity: this.state.animation,
            transform: [{
                translateY: this.state.animation
            }]
        }
        return (
            <View style={styles.container}>
                <Animated.View style={animatedStyles}>
                    <Ionicons
                        name="md-log-in"
                        color="white"
                        size={250}
                    />
                </Animated.View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f05d00',

        alignItems: 'center',
        paddingVertical: 20
    },

})