import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import {moviesReducer} from '../app/movies/movies';
import {rootSaga} from '../app/movies/movies.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    movies: moviesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);
