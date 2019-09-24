import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size={size || 'large'} color={'#f6b436'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    }
})

export default Spinner;

