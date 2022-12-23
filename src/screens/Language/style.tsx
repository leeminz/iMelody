import {colors, fontFamily} from '@util';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  dropdown: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  dropdownContainer: {
    flex: 1,
    left: 15,
    marginTop: 10,
    borderColor: colors.white,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    overflow: 'visible',
  },
  itemStyle: {
    height: 50,
  },
  selectedStyle: {
    height: 50,
    backgroundColor: colors.pink,
  },
  dropdownPicker: {
    borderRadius: 10,
    borderColor: colors.grey,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  labelStyle: {
    fontSize: 16,
    color: colors.black,
    ...fontFamily.medium,
  },
  textDropdown: {
    textAlign: 'left',
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
});

export {styles};
