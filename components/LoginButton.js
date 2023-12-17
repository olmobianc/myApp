import { StyleSheet, Text, Pressable } from 'react-native'

function LoginButton(props) {
    return (
        <Pressable 
            style={
                [styles.signInButton, styles[`signInButton_${props.type}`]]
            } 
            onPress={console.log("ciao")}
        >
            <Text 
                style={
                    [styles.signInText, styles[`signInText_${props.type}`]]
                }
            >
                {props.text}
            </Text>
        </Pressable>
    )
}

export default LoginButton

const styles = StyleSheet.create({
    signInButton: {
        padding: 10,
        marginVertical: 6,
        minWidth: "100%",
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    signInButton_primary: {
        backgroundColor: "#F0F8FF",
    },
    signInButton_secondary: {
        backgroundColor: "#FFF0F5",
    },
    signInButton_tertiary: {
        backgroundColor: "#fff",
        color: "#fff"
    },
    signInText: {
        fontWeight: "bold",
    },
    signInText_primary: {
        color: "#000",
    },
    signInText_secondary: {
        color: "#000"
    },
    signInText_tertiary: {
        color: "#A9A9A9"
    },
})