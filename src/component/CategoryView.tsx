import React from 'react';
import {StyleSheet, TouchableOpacity, UIManager, Text} from 'react-native';
import {colors, isIos, fontFamily} from '@util';
import {CategoryViewProps} from '@interfaces';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {LIST_TOPIC_CATEGORY} from '@routeName';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CategoryView = React.memo((props: CategoryViewProps) => {
  const {category} = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(
      LIST_TOPIC_CATEGORY as never,
      {category: category} as never,
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.5}>
      <FastImage
        source={{uri: category.image}}
        style={styles.imageStyle}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.nameStyle}>{category.name}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  imageStyle: {
    width: 30,
    height: 30,
    borderRadius: 12,
    backgroundColor: colors.grey,
  },
  nameStyle: {
    marginLeft: 15,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
});

export {CategoryView};
