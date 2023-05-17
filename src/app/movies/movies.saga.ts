import {takeEvery, put, call, all} from 'redux-saga/effects';

import {moviesAction} from './movies';
import {searchMovies, getMovieDetailById} from '../../services/movies.service';

function* fetchMoviesSaga(action: {type: string; payload: {query: string}}) {
  try {
    yield put(moviesAction.startFetchMovies());
    const res = yield call(searchMovies, action.payload.query);
    yield put(moviesAction.addMovies({movies: res.results}));
  } catch (error) {
    yield put(moviesAction.errorFetchMovies(error));
  }
}

function* fetchMovieDetail(action: {type: string; payload: {movieId: number}}) {
  try {
    const res = yield call(getMovieDetailById, action.payload.movieId);
    yield put(
      moviesAction.addMovieDetail({
        movieId: action.payload.movieId,
        movieDetail: res,
      }),
    );
  } catch (error) {}
}

export function* rootSaga() {
  yield all([
    takeEvery('FETCH_MOVIES_SAGA', fetchMoviesSaga),
    takeEvery('FETCH_MOVIE_DETAIL_SAGA', fetchMovieDetail),
  ]);
}
