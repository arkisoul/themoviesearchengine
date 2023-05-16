import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

import {login} from '../../../services/auth.service';
import {Login} from '../../../types/login';

export const LoginScreen = () => {
  const [user, setUser] = useState<Login>({email: '', password: ''});

  const handleChange = (name: string, text: string) => {
    setUser({...user, [name]: text});
  };

  const handleLogin = async () => {
    try {
      const res = await login(user);
      console.log('Login successfully', res);
      AsyncStorage.multiSet([
        ['@accessToken', res.accessToken],
        ['@user', JSON.stringify(res.user)],
      ]);
      setUser({email: '', password: ''});
    } catch (error) {
      console.error('Error! while login', error);
    }
  };

  return (
    <View style={sytles.container}>
      <Text style={sytles.heading}>Welcome back to TMDB</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={sytles.input}
        onChangeText={(text: string) => handleChange('email', text)}
        value={user.email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={sytles.input}
        onChangeText={(text: string) => handleChange('password', text)}
        value={user.password}
      />
      <Pressable style={sytles.button} onPress={handleLogin}>
        <Text style={sytles.buttonText}>Login</Text>
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
    gap: 20,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
  },
  input: {
    padding: 8,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#dbdbdb',
    marginBottom: 5,
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
