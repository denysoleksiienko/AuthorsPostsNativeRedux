import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  authors: [],
  error: false,
};

export const reducer = handleActions(
  {
    [actions.setAuthors]: (state, { payload }) => ({
      ...state,
      authors: [...state.authors, ...payload],
    }),

    [actions.setError]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState,
);
