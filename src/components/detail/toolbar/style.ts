import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  action_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button_wrapper: {
    backgroundColor: '#f8f9fd',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    width: 28,
    height: 28,
  },
  title_container: {
    alignItems: 'center',
  },
  logo_wrapper: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 40,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 3}, // iOS shadow
    shadowOpacity: 0.24, // iOS shadow
    shadowRadius: 8, // iOS shadow
    marginBottom: 10,
  },

  logo_company: {
    width: 100,
    height: 100,
    textAlign: 'center',
    borderRadius: 40,
  },
  title: {
    color: '#050220',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
  },
  location_wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  company: {
    fontSize: 20,
    fontWeight: '500',
    color: '#050220',
  },
  location_icon: {
    width: 24,
    height: 24,
  },
  location: {
    fontSize: 18,
    color: '#050220',
  },
});
