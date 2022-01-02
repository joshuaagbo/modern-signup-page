import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profileScreen';
import RegisterScreen from '../screens/registerScreen';
import LoginScreen from '../screens/loginScreen';

const Stack = createNativeStackNavigator();

const bgColor = '#770AFE';

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: '#fff',
        },
        headerBackTitle: {color: '#fff'},
        headerStyle: {
          backgroundColor: bgColor,
        },
        headerShown: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
