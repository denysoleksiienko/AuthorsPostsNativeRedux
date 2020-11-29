import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  authors: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    paddingLeft: 16,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
