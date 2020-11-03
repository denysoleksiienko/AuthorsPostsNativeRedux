import { createAction } from 'redux-actions';
import { HttpServices } from '../../HttpServices';

export const setPosts = createAction('SET_POSTS');
export const setError = createAction('SET_ERROR');

export const initialPostsPage = () => async (dispatch) => {
  try {
    const posts = await HttpServices.getPosts();
    dispatch(setPosts(posts));
  } catch (error) {
    dispatch(setError(error));
  }
};
