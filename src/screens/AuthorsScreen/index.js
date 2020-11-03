import { connect } from 'react-redux';
import { AuthorsScreen as AuthorsScreenComponent } from './AuthorsScreen';

import { initialUsersPage } from '../../redux/authors/actions';
import { initialPostsPage } from '../../redux/posts/actions';

const mapStateToProps = (state) => ({
  authors: state.authors.authors,
  isLoading: state.authors.isLoading,
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  initialUsersPage,
  initialPostsPage,
};

export const AuthorsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorsScreenComponent);
