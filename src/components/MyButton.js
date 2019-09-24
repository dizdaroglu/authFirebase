import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MyButton = ({
    onPress, value
}) => (
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress}>
            <LinearGradient style={styles.container} colors={['#f05d00', '#f6b436']}>

                <Text style={styles.buttonText}>{value}</Text>

            </LinearGradient>
        </TouchableOpacity>
    );
const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        height: 50,
        elevation: 5,
        //marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginHorizontal: 10,
    },
    button: {
        //  height: 50,

        marginTop: 50
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold'
    }
})

export default MyButton;
