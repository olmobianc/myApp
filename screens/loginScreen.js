import { StyleSheet, TextInput, Text, View, Image, ScrollView } from 'react-native'
import { useState } from 'react';

import logo from "../assets/splash.png"

import LoginButton from '../components/LoginButton'

function LoginScreen() {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.loginContainer}>

            <Image source={logo} style={styles.logo}/>

            <Text style={styles.loginText}>Login</Text>

            <TextInput 
                style={styles.loginInput}
                placeholder="email address"
                value={email} 
                onChangeText={onChangeEmail} 
            />
            <TextInput 
                style={styles.loginInput} 
                placeholder="password"
                value={password} 
                onChangeText={onChangePassword}
                secureTextEntry={true}
            />

            <LoginButton text="Sign in" type="primary"></LoginButton>
            <LoginButton text="Forgot password?" type="tertiary"></LoginButton>
            <LoginButton text="Sign in with Facebook" type="secondary"></LoginButton>
            <LoginButton text="Sign in with Google" type="secondary"></LoginButton>
            <LoginButton text="Sign in with Apple" type="secondary"></LoginButton>
            <LoginButton text="Don't have an account? Sign up" type="tertiary"></LoginButton>

            </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    logo: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 15,
    },
    loginText: {
        padding: 5,
        fontWeight: "bold",
        fontSize: 24,
    },
    loginInput: {
        borderWidth: 1,
        padding: 5,
        marginVertical: 5,
        borderColor: "#ccc",
        minWidth: "100%",
    }
})