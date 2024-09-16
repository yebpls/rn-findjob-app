import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 10,
    fontSize: 16,
  },
  searchButton: {
    width: 50,
    height: 50,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f07869',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIcon: {
    width: 30,
    height: 30,
  },

  filterContainer: {flexDirection: 'row', paddingHorizontal: 10, gap: 10},
  btnFilter: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
  },
  active: {
    color: 'black',
    borderColor: 'black',
  },
  inactive: {
    color: 'gray',
    borderColor: 'gray',
  },
});
