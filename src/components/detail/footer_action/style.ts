import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  favorite_wrapper: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ef7e60',
    borderRadius: 16,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favorite: {
    width: 34,
    height: 34,
  },
  apply_button: {
    backgroundColor: '#ef7e60',
    padding: 14,
    flexGrow: 1,
    borderRadius: 16,
    marginLeft: 10,
  },
  apply_text: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
  },
});
