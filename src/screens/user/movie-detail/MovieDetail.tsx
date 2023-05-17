import React, {useState, useEffect} from 'react';
import {Text, Image, ScrollView, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import {
  getMovieDetailById,
  markMovieAsFav,
} from '../../../services/movies.service';
import {MovieCard} from '../../../components/movie/Movie';
import {Movie} from '../../../types/movie';
import {IMAGE_BASE_PATH} from '../../../contants';

export const MovieDetailScreen = ({route}) => {
  const dispatch = useDispatch();
  const moviesState = useSelector(state => state.movies);
  const {movieId} = route.params;

  useEffect(() => {
    dispatch({type: 'FETCH_MOVIE_DETAIL_SAGA', payload: {movieId}});
  });

  const markFav = async () => {
    try {
      const userString = await AsyncStorage.getItem('@user');
      if (userString) {
        const user = JSON.parse(userString);
        const res = await markMovieAsFav(user.id, movie.id);
        return res;
      }
      throw new Error('User is not authenticated');
    } catch (error) {
      console.log('Error! saving user fav movie', error);
    }
  };

  const movie = moviesState.movieDetails[movieId];

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      {movie ? (
        <Image
          source={{uri: `${IMAGE_BASE_PATH}/original/${movie.backdrop_path}`}}
          resizeMode={'cover'}
          style={{flex: 1}}
        />
      ) : null}
      {movie ? <MovieCard movie={movie} onPress={() => {}} /> : null}
      <Pressable
        onPress={markFav}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: 'teal',
          marginVertical: 10,
        }}>
        <Text style={{color: 'white'}}>Fav</Text>
      </Pressable>
    </ScrollView>
  );
};
