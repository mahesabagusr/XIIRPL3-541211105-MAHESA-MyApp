import 'react-native-gesture-handler'
import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Home from './src/screens/home'
import Login from './src/screens/login'
import Register from './src/screens/register'
// import profile from './src/pages/profileDetail/profileDetail.js'


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
