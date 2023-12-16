import { TextInput, View, Text } from 'react-native'

import LoginButton from '../components/LoginButton'

function LoginScreen() {

    const [email, onChangeEmail] = React.useState('your email');
    const [password, onChangePassword] = React.useState('your password');

    return (
        <View>
            <Text style={styles.loginText}>Login</Text>
            <TextInput style={styles.textInput} value={email} />
            <TextInput style={styles.textInput} value={password} />
            <LoginButton style={styles.mainLoginButton}> Login </LoginButton>
            <LoginButton style={styles.socialLoginButton}> Google </LoginButton>
            <LoginButton style={styles.socialLoginButton}> Facebook </LoginButton>
            <LoginButton style={styles.socialLoginButton}> X </LoginButton>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginText: {

    },
    textInput: {
        borderWidth: 1,
        padding: 5,
        borderColor: "#ccc",
        width: "80%"
    },
    mainLoginButton: {

    },
    socialLoginButton: {
        
    }
})