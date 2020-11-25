import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  infoUserView: {
    flex: 2,
    paddingLeft: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  email: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#382A2C',
    opacity: 0.54,
  },
  postsLength: {
    flex: 1,
    paddingLeft: 80,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
});
