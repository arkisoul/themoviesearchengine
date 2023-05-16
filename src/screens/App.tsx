import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RegisterScreen} from './auth/register/Resiter';
import {LoginScreen} from './auth/login/Login';
import {MoviesScreen} from './user/movies/Movies';
import {FavMoviesScreen} from './user/fav-movies/FavMovies';
import {MovieDetailScreen} from './user/movie-detail/MovieDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getAccessToken = async () => {
    const accessToken = await AsyncStorage.getItem('@accessToken');
    setIsAuthenticated(Boolean(accessToken));
  };

  getAccessToken();

  let routes = (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );

  if (isAuthenticated) {
    routes = (
      <Stack.Navigator initialRouteName="Movies">
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="FavMovies" component={FavMoviesScreen} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      </Stack.Navigator>
    );
  }

  return <NavigationContainer>{routes}</NavigationContainer>;
};
