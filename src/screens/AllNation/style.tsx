import {colors, fontFamily} from '@util';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  searchBar: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey,
  },
  search: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
});

export {styles};
