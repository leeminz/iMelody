import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@util';
import {fontFamily} from '@util';

let {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    alignSelf: 'center',
    marginTop: height / 5,
    marginBottom: 15,
    fontSize: 24,
    color: colors.black,
    ...fontFamily.medium,
  },
  textStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: colors.grey,
    ...fontFamily.regular,
  },
  dropdownContainer: {
    flex: 1,
    left: 15,
    marginTop: 40,
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
    marginTop: 30,
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
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
  textView: {
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  buttonStyle: {
    marginTop: 30,
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
  },
});

export {styles};
