import {colors, fontFamily} from '@util';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  infoView: {
    marginTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 12,
    backgroundColor: colors.grey,
  },
  textView: {
    flex: 1,
    marginLeft: 15,
  },
  topicNameStyle: {
    fontSize: 24,
    color: colors.black,
    ...fontFamily.medium,
  },
  categoryStyle: {
    marginTop: 5,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
  descriptionView: {
    padding: 15,
  },
  descriptionStyle: {
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
  showStyle: {
    fontSize: 16,
    color: colors.purple,
    ...fontFamily.bold,
  },
});

export {styles};
