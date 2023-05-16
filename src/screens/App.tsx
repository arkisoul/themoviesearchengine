import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from './auth/register/Resiter';
import {LoginScreen} from './auth/login/Login';
import {MoviesScreen} from './user/movies/Movies';
import {FavMoviesScreen} from './user/fav-movies/FavMovies';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="FavMovies" component={FavMoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
