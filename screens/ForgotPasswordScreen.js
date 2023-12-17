import { StyleSheet, TextInput, Text, View } from 'react-native'
import { useState } from 'react';

import LoginButton from '../components/LoginButton'

function ForgotPasswordScreen() {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.loginContainer}>

            <Text style={styles.loginText}>Reset your Password</Text>

            <Text style={styles.passwordResetText}>Please insert your username</Text>

            <TextInput 
                style={styles.loginInput}
                placeholder="email address"
                value={email} 
                onChangeText={onChangeEmail} 
            />

            <LoginButton text="Submit" type="primary"></LoginButton>
            <LoginButton text="Back to Sign in" type="tertiary"></LoginButton>

        </View>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    loginText: {
        padding: 5,
        fontWeight: "bold",
        fontSize: 24,
    },
    passwordResetText: {
        padding: 5,
        fontSize: 12,
        alignContent: "flex-start"
    },
    loginInput: {
        borderWidth: 1,
        padding: 5,
        marginVertical: 5,
        borderColor: "#ccc",
        minWidth: "100%",
    }
})