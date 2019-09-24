import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';

const MyInput = ({ icon, placeholder, secureTextEntry, value, onChangeText }) => {

    return (
        <View style={styles.container}>

            <Input
                containerStyle={{ width: '100%' }}
                leftIcon={
                    <Ionicons
                        name={icon}
                        size={20}
                        style={styles.icon}
                    />
                }
                inputContainerStyle={styles.input}
                selectionColor={'#f05d00'}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                inputStyle={{ fontFamily: 'Montserrat-Light' }}
                value={value}
                onChangeText={onChangeText}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        marginBottom: 40,
        borderRadius: 40,
        height: 50,
        paddingHorizontal: 15,
        elevation: 8,
        borderBottomWidth: 0,

    },
    icon: {
        marginRight: 10
    }
})
export default MyInput;
