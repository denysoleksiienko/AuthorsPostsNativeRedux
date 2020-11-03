import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  authors: [],
  isLoading: false,
  error: false,
};

export const reducer = handleActions(
  {
    [actions.setAuthors]: (state, { payload }) => ({
      ...state,
      authors: [...state.authors, ...payload],
    }),

    [actions.setLoading]: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),

    [actions.setError]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState,
);
