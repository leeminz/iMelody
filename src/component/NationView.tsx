import React from 'react';
import {
  View,
  StyleSheet,
  UIManager,
  TouchableOpacity,
  Text,
} from 'react-native';
import {NationViewProps} from '@interfaces';
import {colors, fontFamily, isIos} from '@util';
import FastImage from 'react-native-fast-image';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const NationView = React.memo((props: NationViewProps) => {
  const {name, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
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
    paddingHorizontal: 15,
  },
  button: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  flagStyle: {
    width: 60,
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.grey,
  },
  nameStyle: {
    marginLeft: 15,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.regular,
  },
});

export {NationView};
