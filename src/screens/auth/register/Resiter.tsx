import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

import {register} from '../../../services/auth.service';

export const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleRegister = async () => {
    try {
      const res = await register({name, email, password});
      console.log('User registered successfully', res);
      setName('');
      setEmail('');
      setPassword('');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error! registering user', error);
    }
  };

  return (
    <View style={sytles.container}>
      <Text style={sytles.heading}>Register to TMDB</Text>
      <TextInput
        placeholder="Full name"
        style={sytles.input}
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={sytles.input}
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={sytles.input}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Pressable style={sytles.button} onPress={handleRegister}>
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
