import { View, Text } from 'react-native'

function LoginButton(props) {
    return (
        <View>
            <Text>
                {props.children}
            </Text>
        </View>
    )
}

export default LoginButton