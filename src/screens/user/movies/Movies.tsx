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
import {useDispatch, useSelector} from 'react-redux';

import {MovieCard} from '../../../components/movie/Movie';
import {Movie} from '../../../types/movie';
import * as movieDBService from '../../../data/movies';

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
  const dispatch = useDispatch();
  const moviesState = useSelector(state => state.movies);
  const commonState = useSelector(state => state.common);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log('commonState', commonState);

  const fetchMovies = async (query: string) => {
    dispatch({type: 'FETCH_MOVIES_SAGA', payload: {query}});
  };

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
    if (text.trim().length >= 3) {
      fetchMovies(text.trim());
    }
  };

  const handleOnPress = (movieId: number) => {
    navigation.navigate('MovieDetail', {movieId});
  };

  const renderMovie: ListRenderItem<Movie> = ({item}) => (
    <MovieCard movie={item} key={item.id} onPress={handleOnPress} />
  );

  const insertMovie = async () => {
    try {
      await movieDBService.insert({
        title: 'Spiderman: Far From Home',
        rating: 8.9,
        votes: 2304040,
      });
    } catch (error) {
      console.log('Error movie save', error);
    }
  };

  const findMovies = async () => {
    try {
      const res = await movieDBService.findAll();
      setMovies(res);
      console.log('Movies from SQLite DB', res);
    } catch (error) {
      console.log('Error movies find', error);
    }
  };

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
        <Pressable onPress={insertMovie}>
          <Text>Insert New Movie</Text>
        </Pressable>
        <Pressable onPress={findMovies}>
          <Text>Get all Movies</Text>
        </Pressable>
        {movies.map(movie => {
          return <Text key={movie.id}>{movie.title}</Text>;
        })}
      </View>
      <FlatList
        data={moviesState.movies}
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
