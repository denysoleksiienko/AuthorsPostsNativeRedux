import { connect } from 'react-redux';
import { PostsScreen as PostsScreenComponent } from './PostsScreen';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export const PostsScreen = connect(mapStateToProps, null)(PostsScreenComponent);
