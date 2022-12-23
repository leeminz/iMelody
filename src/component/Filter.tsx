import React from 'react';
import {StyleSheet, TouchableOpacity, UIManager, Text} from 'react-native';
import {colors, isIos, fontFamily, STYLE} from '@util';
import {FilterProps} from '@interfaces';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Filter = React.memo((props: FilterProps) => {
  const {name, onPress, isActive, color} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: isActive ? color : 'transparent',
      }}
      activeOpacity={0.5}>
      <Text
        style={{
          ...styles.nameStyle,
          color: isActive ? colors.white : colors.grey,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  nameStyle: {
    fontSize: 16,
    ...fontFamily.medium,
  },
});

export {Filter};
