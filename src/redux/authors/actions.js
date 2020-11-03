import { createAction } from 'redux-actions';
import { HttpServices } from '../../HttpServices';

export const setAuthors = createAction('SET_AUTHORS');
export const setError = createAction('SET_ERROR');

export const initialUsersPage = () => async (dispatch) => {
  try {
    const authors = await HttpServices.getUsers();
    dispatch(setAuthors(authors));
  } catch (error) {
    dispatch(setError(error));
  }
};
