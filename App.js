import 'react-native-gesture-handler'
import React from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

// You can import supported modules from npm
import Home from './src/screens/home'
import Login from './src/screens/login'
import Register from './src/screens/register'
import { ButtonLogout } from './src/components/atomics';
// import profile from './src/pages/profileDetail/profileDetail.js'


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login Screen'
            }} />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Register Screen',
              headerLeft: null,
            }} />

          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: 'Home Screen',
              headerLeft: null,
              headerRight: () => {
                return (
                  <ButtonLogout title='Logout' onPress={() => {
                    Alert.alert('Logout Berhasil');
                    navigation.dispatch(StackActions.replace('Login'))
                  }} />
                )
              },
            })} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
