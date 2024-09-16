import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginTop: 6,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 16,
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
    padding: 10,
    borderRadius: 8,
  },
  jobItem: {
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#f6f8fa',
    borderRadius: 8,
    padding: 8,
    width: 240,
    marginLeft: 10,
  },
  jobImageContainer: {
    backgroundColor: '#f6f8fa',
    width: 50,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  jobImage: {width: 42, height: 42},
  companyName: {
    fontSize: 16,
    marginBottom: 16,
  },
  jobName: {
    fontSize: 20,
    color: 'black',
    marginBottom: 4,
  },
  country: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
  },
});
