import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ButtonMain, ButtonSecond, FormText, FormPassword, TextLink } from '../../components/atomics';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setTimeout(() => {
      Alert.alert('Login Successful', 'Welcome!');
      navigation.navigate('Home');
    }, 1000)

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={require('../../assets/img/logo.png')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading2}>Hello,</Text>
          <Text style={styles.subheading3}>Masuk untuk melanjutkan yahh</Text>
        </View>

        <View style={{ flex: 1 }}>
          <FormText title='username' value={username} onChangeText={setUsername} />
          <FormPassword title='password' value={password} onChangeText={setPassword} />

          <TouchableOpacity>
            <Text style={{ ...styles.subheading3, marginTop: 10, alignSelf: 'flex-end' }}>Lupa Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginTop: 32 }}>

          <ButtonMain title='Masuk' onPress={handleLogin} />

          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <View>
              <Text style={styles.separatorText}>Atau</Text>
            </View>
            <View style={styles.line} />
          </View>

          <View style={{ marginTop: 32 }}>
            <ButtonSecond title='Google' />
          </View>

        </View>
        <TextLink onPress={() => { navigation.navigate('Register') }} title1='Belum Punya Akun?' title2='Register' />
      </View>
    </ScrollView >
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor: '#B40505'
  },
  logoContainer: {
    flex: 1,
    width: 90,
    height: 90,
    backgroundColor: '#FE5B6E',
    borderRadius: 10,
    justifyContent: 'center'
  },
  textContainer: {
    marginTop: 24,
    marginBottom: 12,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32
  },
  separatorText: {
    width: 50,
    textAlign: 'center',
    color: 'grey'
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey'
  },
  logoImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  heading1: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 32,
  },
  heading2: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 28,
  },
  subheading3: {
    color: 'black',
    fontWeight: 'light',
    fontSize: 14,
    marginTop: 10
  },
})