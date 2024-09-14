import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },

  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  icon: {
    width: 34,
    height: 34,
  },

  avatar: {
    borderRadius: 8,
    width: 38,
    height: 38,
  },

  subTitle: {
    color: 'black',
    fontSize: 26,
  },

  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
});
