import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';

import {searchMovies} from '../../../services/movies.service';
import {MovieCard} from '../../../components/movie/Movie';
import {Movie} from '../../../types/movie';

export const MoviesScreen = ({navigation}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (query: string) => {
    try {
      const res: {page: number; results: Movie[]} = await searchMovies(query);
      console.log('res', res);
      setMovies(res.results);
    } catch (error) {
      console.error('Error! fetching movies', error);
    }
  };

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
    if (text.trim().length >= 3) {
      fetchMovies(text.trim());
    } else {
      setMovies([]);
    }
  };

  const handleOnPress = (movieId: number) => {
    navigation.navigate('MovieDetail', {movieId});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={handleSearchTermChange}
        style={styles.search}
      />
      <View style={styles.movies}>
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} onPress={handleOnPress} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 20,
    display: 'flex',
  },
  movies: {
    gap: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    padding: 8,
    borderRadius: 8,
  },
});
