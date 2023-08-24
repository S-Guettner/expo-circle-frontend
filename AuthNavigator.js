import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

// Import your authentication screens
import Onboarding from './Screens/Onboarding.js';
import Login from './Screens/Login.js';
import Register from './Screens/Register.js';
import RegisterDetails from './Screens/RegisterDetails.js';

const Stack = createStackNavigator();

const AuthNavigator = ({ isAuthenticated, setIsAuthenticated }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="Login" options={{ headerShown: false }}>
                {(props) => <Login {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
                {(props) => <Register {...props} />}
            </Stack.Screen>
            <Stack.Screen name="RegisterDetails" options={{ headerTitle: false }}>
                {(props) => <RegisterDetails {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AuthNavigator;
