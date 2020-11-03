import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as authorsReducer } from './authors/reducer';
import { reducer as postsReducer } from './posts/reducer';

const reducers = combineReducers({
  authors: authorsReducer,
  posts: postsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
