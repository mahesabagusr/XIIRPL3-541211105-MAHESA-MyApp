import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React from 'react'

function ButtonLogout({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export { ButtonLogout } 

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: 'red',
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: 'black'
  },
})