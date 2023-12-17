import { StyleSheet, TextInput, Text, View, Image, ScrollView } from 'react-native'
import { useState } from 'react';

import logo from "../assets/splash.png"

import LoginButton from '../components/LoginButton'

function CreateAccountScreen() {

    const [username, onChangeUsername] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.loginContainer}>

                <Image source={logo} style={styles.logo} />

                <Text style={styles.createAccountText}>Create an account</Text>

                <TextInput 
                    style={styles.loginInput}
                    placeholder="username"
                    value={username} 
                    onChangeText={onChangeUsername} 
                />
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
                <TextInput 
                    style={styles.loginInput} 
                    placeholder="confirm password"
                    value={confirmPassword} 
                    onChangeText={onChangeConfirmPassword}
                    secureTextEntry={true}
                />

                <LoginButton text="Register" type="primary"></LoginButton>

                <Text style={styles.privacyTextContainer}>
                        By registering, you confirm that you accept
                        our <Text style={styles.privacyText}>Terms of Use</Text>
                        {' '}and{' '}
                        <Text style={styles.privacyText}>Privacy Policy.</Text>
                </Text>

                <LoginButton text="Sign in with Facebook" type="secondary"></LoginButton>
                <LoginButton text="Sign in with Google" type="secondary"></LoginButton>
                <LoginButton text="Sign in with Apple" type="secondary"></LoginButton>
                <LoginButton text="Have an account? Sign in" type="tertiary"></LoginButton>

            </View>
        </ScrollView>
    )
}

export default CreateAccountScreen

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
    createAccountText: {
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
    },
    privacyTextContainer: {
        marginVertical: 10,
        color: "#ccc",
    },
    privacyText: {
        color: "#FFA07A"
    }
})