import React, {useState, useEffect} from 'react';
import {Text, Image, ScrollView, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getMovieDetailById,
  markMovieAsFav,
} from '../../../services/movies.service';
import {MovieCard} from '../../../components/movie/Movie';
import {Movie} from '../../../types/movie';
import {IMAGE_BASE_PATH} from '../../../contants';

export const MovieDetailScreen = ({route}) => {
  const [movie, setMovie] = useState<Movie>({} as Movie);
  const {movieId} = route.params;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await getMovieDetailById(movieId);
        console.log('MovieDetails', res);
        setMovie(res);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

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

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Image
        source={{uri: `${IMAGE_BASE_PATH}/original/${movie.backdrop_path}`}}
        resizeMode={'cover'}
        style={{flex: 1}}
      />
      <MovieCard movie={movie} onPress={() => {}} />
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
