import React, {FunctionComponent, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  ListRenderItem,
  Pressable,
  Text,
} from 'react-native';

import {searchMovies} from '../../../services/movies.service';
import {MovieCard} from '../../../components/movie/Movie';
import {Movie} from '../../../types/movie';

type MovieScreenNavigationProps = {
  navigation: any;
};

// type Props = {
//   movieId: number;
//   name: string;
// };

type MoviesScreenProps = MovieScreenNavigationProps;

export const MoviesScreen: FunctionComponent<MoviesScreenProps> = ({
  navigation,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (query: string) => {
    try {
      const res: {page: number; results: Movie[]} = await searchMovies(query);
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

  const renderMovie: ListRenderItem<Movie> = ({item}) => (
    <MovieCard movie={item} key={item.id} onPress={handleOnPress} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={handleSearchTermChange}
        style={styles.search}
      />
      <View>
        <Pressable onPress={() => navigation.navigate('FavMovies')}>
          <Text>Fav Movies List</Text>
        </Pressable>
      </View>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{gap: 20}}
      />
      {/* <View style={styles.movies}>
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} onPress={handleOnPress} />
        ))}
      </View> */}
    </View>
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
