import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RegisterScreen} from './auth/register/Resiter';
import {LoginScreen} from './auth/login/Login';
import {MoviesScreen} from './user/movies/Movies';
import {FavMoviesScreen} from './user/fav-movies/FavMovies';
import {MovieDetailScreen} from './user/movie-detail/MovieDetail';
import {commonActions} from '../app/common/common';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const {isConnected, isInternetReachable} = state;
      dispatch(
        commonActions.setNetworkInfo({isConnected, isInternetReachable}),
      );
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    // const getAccessToken = async () => {
    //   const accessToken = await AsyncStorage.getItem('@accessToken');
    //   setIsAuthenticated(Boolean(accessToken));
    // };

    // getAccessToken();
    setIsAuthenticated(Boolean(authState.accessToken));
  }, [dispatch, authState.accessToken]);

  console.log('AppCom', authState, isAuthenticated);

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

  return routes;
};
