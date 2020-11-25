import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  title: {
    padding: 18,
    paddingBottom: 0,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  body: {
    padding: 18,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#382A2C',
    opacity: 0.54,
  },
});
