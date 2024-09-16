import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  wrapper: {
    backgroundColor: '#white',
    // width: 200,
    padding: 20,
    borderRadius: 8,
    height: 300,
  },
  jobItem: {
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#f6f8fa',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginBottom: 5,

    flexDirection: 'row',
  },
  jobImageContainer: {
    backgroundColor: '#f6f8fa',
    width: 50,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
  },
  jobImage: {width: 42, height: 42},
  textJob: {flex: 1},
  jobName: {
    fontSize: 20,
    color: 'black',
    marginBottom: 4,
  },
  titleName: {},
  errorText: {color: 'red'},
});
