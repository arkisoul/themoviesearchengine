import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

export const RegisterScreen = () => {
  return (
    <View style={sytles.container}>
      <Text style={sytles.heading}>Register to TMDB</Text>
      <TextInput placeholder="Full name" style={sytles.input} />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={sytles.input}
      />
      <TextInput placeholder="Password" secureTextEntry style={sytles.input} />
      <Pressable style={sytles.button}>
        <Text style={sytles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    minHeight: '100%',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    padding: 8,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#dbdbdb',
    marginBottom: 25,
    minWidth: '100%',
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: 'teal',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
