import React from 'react'
import MessageScreen from '../screens/MessagesScreen'
import AccountScreen from '../screens/AccountScreen'
const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessageScreen} options={{headerShown:false }} />
    </Stack.Navigator>
)

export default AccountNavigator