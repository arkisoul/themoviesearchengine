import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {getMovieDetailById} from '../../../services/movies.service';
import {MovieCard} from '../../../components/movie/Movie';
import {Movie} from '../../../types/movie';

export const MovieDetailScreen = ({route}) => {
  const [movie, setMovie] = useState<Movie>({} as Movie);
  const {movieId} = route.params;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await getMovieDetailById(movieId);
        setMovie(res);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  return (
    <View style={{padding: 10}}>
      <MovieCard movie={movie} onPress={() => {}} />
    </View>
  );
};
