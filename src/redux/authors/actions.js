import { createAction } from 'redux-actions';
import { HttpServices } from '../../HttpServices';

export const setLoading = createAction('SET_LOADING');
export const setAuthors = createAction('SET_AUTHORS');
export const setError = createAction('SET_ERROR');

export const initialUsersPage = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const authors = await HttpServices.getUsers();
    dispatch(setAuthors(authors));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
