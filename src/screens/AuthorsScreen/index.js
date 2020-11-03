import { connect } from 'react-redux';
import { AuthorsScreen as AuthorsScreenComponent } from './AuthorsScreen';

import { initialUsersPage } from '../../redux/authors/actions';

const mapStateToProps = (state) => ({
  authors: state.authors.authors,
});

const mapDispatchToProps = {
  initialUsersPage,
};

export const AuthorsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorsScreenComponent);
