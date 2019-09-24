
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { withNavigation, NavigationEvents } from 'react-navigation';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';
import Spinner from '../components/Spinner';

import firebase from 'firebase';

class RegisterScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        err: '',
        loading: false
    }
    onButtonPress = () => {
        const { email, password } = this.state;
        this.setState({ err: '', loading: true });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
    }
    onLoginSuccess = () => {
        this.setState({
            err: '',
            loading: false,
            email: '',
            password: ''
        });
        this.props.navigation.navigate('App')
    }
    onLoginFail = () => {
        this.setState({
            err: 'Authentication Failed.',
            loading: false
        })
    }
    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <MyButton onPress={() => this.onButtonPress()} value="Sign Up" />
        );
    }

    render() {

        return (
            <View style={styles.container}>
                <NavigationEvents onWillBlur={() => this.setState({ err: '' })} />
                <LinearGradient colors={['#f05d00', '#f6b436']} style={styles.up}>
                    <View style={styles.upContent}>
                        <Ionicons
                            name="md-log-in"
                            style={styles.logo}
                            color="white"
                            size={100}
                        />
                        <Text style={styles.upLogin}>Sing Up</Text>
                    </View>
                </LinearGradient>
                <View style={styles.down}>
                    <View style={styles.downContent}>
                        <MyInput icon="md-mail" placeholder="Email" value={this.state.email} onChangeText={email => this.setState({ email })} />
                        <MyInput icon="md-key" placeholder="Password" secureTextEntry={true} value={this.state.password} onChangeText={password => this.setState({ password })} />

                    </View>
                    {
                        this.state.err ? <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.err}</Text> : null
                    }
                    <View style={styles.downButton}>
                        {
                            this.renderButton()
                        }
                        <View style={styles.buttonText}>
                            <Text style={{ fontFamily: 'Montserrat-Light' }}> Already have an accound ? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ color: '#f05d00', fontFamily: 'Montserrat-Light' }}> Login</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    up: {
        borderBottomLeftRadius: 140,

        flex: 4
    },
    upContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginBottom: 10
    },
    upLogin: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 50,
        fontFamily: 'Montserrat-SemiBold',
        marginRight: 40,
        color: 'white',
        fontSize: 18
    },
    down: {
        backgroundColor: '#f8f8f8',
        flex: 6,
        paddingHorizontal: 20,
        paddingVertical: 80
    },
    forgotPass: {
        textAlign: 'right',
        fontFamily: 'Montserrat-Light',
        marginHorizontal: 10
    },
    downContent: {
        marginBottom: 90,
        flex: 1,
    },
    downButton: {


    },
    buttonText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default withNavigation(RegisterScreen)