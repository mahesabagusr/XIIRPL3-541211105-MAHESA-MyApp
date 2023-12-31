import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { ProjectCard } from '../../components/organism';
import { StackActions } from '@react-navigation/native';
import { ButtonLogout, ButtonMain } from '../../components/atomics';

export default function Home({ navigation }) {
  // const logoutHandler = () => {
  //   Alert.alert('Logout Berhasil');
  //   navigation.dispatch(StackActions.replace('Login'))
  // }

  // React.useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return (
  //         <ButtonLogout title='Logout' onPress={logoutHandler} />
  //       )
  //     }
  //   })
  // })

  const data = [
    {
      id: 1,
      title: 'Klinik Kita',
      desc: 'Web Design Project',
      img: require('../../assets/Project/Cover1.png'),
    },
    {
      id: 2,
      title: 'Miracleye',
      desc: 'Web Design Project',
      img: require('../../assets/Project/Cover2.png')
    },
    {
      id: 3,
      title: 'Festive',
      desc: 'Web Design Project',
      img: require('../../assets/Project/Cover3.png')
    },
    {
      id: 4,
      title: 'JasainAja',
      desc: 'Web Design Project',
      img: require('../../assets/Project/Cover4.png')
    },
    {
      id: 5,
      title: 'Reastate',
      desc: 'Web Design Project',
      img: require('../../assets/Project/Cover5.png')
    },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../../assets/profile/profil.png')} />
        <Text style={styles.heading1}>Mahesa bagus Raditya</Text>
        <Text style={styles.paragraph}> Hello!
          I am Mahesa Bagus Raditya, and welcome to my Digital CV, Now I am a Student of SMK Telkom Purwokerto majoring in Software Engineering, I have several things that I am interested in, one of which is UI/UX and Programming, and my motto is I want to learn more and more about world of technology</Text>
        <ButtonMain title='See More' />
        <Text style={styles.heading2}>My Recents Project</Text>
        {
          data.map((item) => {
            return (
              <ProjectCard img={item.img} title={item.title} desc={item.desc} />
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
    padding: 30,
  },
  heading1: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 32,
  },
  heading2: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 26,
    paddingTop: 30
  },
  subHeading1: {
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 10
  },
  subHeading2: {
    color: 'black',
    textAlign: 'left',
    fontWeight: 'semibold',
    justifyContent: 'center',
    fontSize: 16,
  },
  paragraph: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    color: 'grey',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
  },
  projectImg: {
    width: 300,
    height: 160,
    alignSelf: 'center',
    borderRadius: 10
  },
  icon: {
    alignSelf: 'center',
  }

});