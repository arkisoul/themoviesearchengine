import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {IMAGE_BASE_PATH} from '../../contants';
import {Movie} from '../../types/movie';

export const MovieCard = ({
  movie,
  onPress,
}: {
  movie: Movie;
  onPress: (movieId: number) => void;
}) => {
  const imgUrl = `${IMAGE_BASE_PATH}/${movie.poster_path}`;

  return (
    <Pressable onPress={() => onPress(movie.id)}>
      <View style={styles.card}>
        <Image source={{uri: imgUrl}} style={styles.poster} />
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 16,
    color: 'teal',
    fontWeight: 'bold',
  },
  content: {
    padding: 6,
    flexBasis: '70%',
  },
  poster: {
    height: 100,
    width: 50,
    flexBasis: '30%',
  },
});
