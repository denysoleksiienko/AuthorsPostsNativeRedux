import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as authorsReducer } from './authors/reducer';

const reducers = combineReducers({
  authors: authorsReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));
