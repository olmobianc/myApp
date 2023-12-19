import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Log In">
                <Stack.Screen name="Log In" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="Create Account" component={CreateAccountScreen}></Stack.Screen>
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}></Stack.Screen>
                <Stack.Screen name="Reset Password" component={ResetPasswordScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation