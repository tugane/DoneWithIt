import React from 'react'

const { createStackNavigator } = require("@react-navigation/stack");

const { default: RegisterScreen } = require("../screens/RegisterScreen");
const { default: LoginScreen } = require("../screens/LoginScreen");
const { default: WelcomeScreen } = require("../screens/WelcomeScreen");

const Stack = createStackNavigator();

const AuthNaviagtor = () => (
    <Stack.Navigator>
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen }/>
        <Stack.Screen name="Register" component={RegisterScreen }/>
    </Stack.Navigator>
)


export default AuthNaviagtor;