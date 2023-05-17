import {createSlice} from '@reduxjs/toolkit';
import {Movie} from '../../types/movie';

type InitialState = {
  movies: Movie[];
  isFetching: boolean;
  error: typeof Error | null;
  movieDetails: {[key: number]: Movie};
};

const initialState: InitialState = {
  movies: [],
  isFetching: false,
  error: null,
  movieDetails: {},
};

// immer

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    startFetchMovies: state => {
      state.isFetching = true;
    },
    addMovies: (state, action) => {
      state.movies = action.payload.movies;
      state.isFetching = false;
    },
    errorFetchMovies: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    addMovieDetail: (
      state,
      action: {payload: {movieId: number; movieDetail: Movie}},
    ) => {
      state.movieDetails[action.payload.movieId] = action.payload.movieDetail;
    },
  },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesAction = moviesSlice.actions;
// export const moviesReducer = (
//   state = initialState,
//   action: {type: string; payload: any},
// ) => {
//   switch (action.type) {
//     case 'GET_MOVIES':
//       const movies = [...state.movies];
//       movies.push(...action.payload.movies);
//       return {...state, movies: movies};
//   }
// };
