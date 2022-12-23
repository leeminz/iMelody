import {colors, fontFamily} from '@util';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  header: {
    marginBottom: 30,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonHeader: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
  },
  textView: {
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  textStyle: {
    marginBottom: 15,
    fontSize: 18,
    color: colors.black,
    ...fontFamily.regular,
  },
  textBox: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grey,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
  dropdownPicker: {
    borderColor: colors.grey,
    backgroundColor: 'transparent',
  },
  dropdownContainer: {
    flex: 1,
    marginTop: 5,
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
  textDropdown: {
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
  sendButton: {
    marginTop: 30,
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
