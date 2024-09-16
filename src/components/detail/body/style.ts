import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#f9f9fb',
    padding: 10,
    paddingBottom: 20,
  },
  button_tab_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
  },
  button_tab: {
    backgroundColor: '#f0f2f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 3}, // iOS shadow
    shadowOpacity: 0.24, // iOS shadow
    shadowRadius: 8, // iOS shadow
  },
  button_text: {
    textAlign: 'center',
    color: '#352e53',
  },

  selected: {
    color: 'white',
    backgroundColor: '#352e53',
  },

  content_container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
    borderRadius: 10,
  },

  h1: {
    color: '#352e53',
    fontSize: 24,
    fontWeight: '500',
  },

  content: {
    color: '#352e53',
    fontSize: 16,
    marginBottom: 2,
    paddingBottom: 6,
  },

  noInfo: {
    textAlign: 'center',
    fontSize: 20,
  },
});
