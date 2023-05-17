import axios from 'axios';
import {Movie} from '../types/movie';

const API_KEY = '421e0bdaf5f724e1114905f6648ba94e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string) => {
  try {
    const res = await axios.get<{page: number; results: Movie[]}>(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetailById = async (movieId: number) => {
  try {
    const res = await axios.get<Movie>(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const markMovieAsFav = async (userId: number, movieId: number) => {
  try {
    const res = await axios.post('http://localhost:3000/favmovies', {
      userId,
      movieId,
    });
    return res.data;
  } catch (error) {
    console.error('Error saving fav movie', error);
  }
};
