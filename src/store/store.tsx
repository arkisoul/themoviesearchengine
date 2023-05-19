import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import {authReducer} from '../app/auth/auth';
import {moviesReducer} from '../app/movies/movies';
import {rootSaga} from '../app/movies/movies.saga';
import {commonReducer} from '../app/common/common';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    common: commonReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);
