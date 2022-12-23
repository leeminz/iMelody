import {colors, fontFamily} from '@util';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 10,
  },
  totalView: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
  },
  adsView: {
    width: '100%',
  },
  adsStyle: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 20,
    color: colors.black,
    ...fontFamily.medium,
  },
  nationStyle: {
    marginTop: 5,
    fontSize: 16,
    color: colors.grey,
    ...fontFamily.regular,
  },
  progressBar: {
    marginTop: 15,
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeStyle: {
    fontSize: 12,
    color: colors.black,
    ...fontFamily.regular,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export {styles};
