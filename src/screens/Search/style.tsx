import {colors, fontFamily} from '@util';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  searchContainer: {
    height: 50,
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.radioCenter,
  },
  search: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
  cancelText: {
    fontSize: 16,
    color: colors.purple,
    ...fontFamily.regular,
  },
  headerContainer: {
    width: '100%',
    marginTop: 25,
    marginBottom: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flex: 1,
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
});

export {styles};
