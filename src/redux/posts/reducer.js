import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  posts: [],
  error: false,
};

export const reducer = handleActions(
  {
    [actions.setPosts]: (state, { payload }) => ({
      ...state,
      posts: [...state.posts, ...payload],
    }),

    [actions.setError]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState,
);
