import {colors, fontFamily} from '@util';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  textView: {
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  headerStyle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    ...fontFamily.medium,
  },
  textStyle: {
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
  boldTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    ...fontFamily.regular,
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.black,
    marginTop: 15,
    padding: 15,
    marginHorizontal: 15,
  },
});

export {styles};
