import React from 'react';
import {
  View,
  StyleSheet,
  UIManager,
  TouchableOpacity,
  Text,
} from 'react-native';
import {TopNationViewProps} from '@interfaces';
import {colors, fontFamily, isIos} from '@util';
import FastImage from 'react-native-fast-image';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TopNationView = React.memo((props: TopNationViewProps) => {
  const {name, onPress, isActive} = props;
  return (
    <View style={{opacity: isActive ? 1 : 0.6}}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        activeOpacity={1}>
        <FastImage
          source={{
            uri: `https://manager-apps.sunnytees.co/storage/flags/${name.replace(
              / /g,
              '-',
            )}.png`,
          }}
          style={styles.flagStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.nameStyle}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    alignItems: 'center',
  },
  flagStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.grey,
  },
  nameStyle: {
    marginTop: 10,
    fontSize: 12,
    color: colors.black,
    ...fontFamily.regular,
  },
});

export {TopNationView};
