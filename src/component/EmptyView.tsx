import React from 'react';
import {StyleSheet, View, UIManager, Text} from 'react-native';
import {colors, isIos, fontFamily} from '@util';
import {EmptyViewProps} from '@interfaces';
import {IconEmpty} from '../assets/svg';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const EmptyView = React.memo((props: EmptyViewProps) => {
  const {title} = props;

  return (
    <View style={styles.container}>
      <IconEmpty />
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    marginTop: 15,
    fontSize: 16,
    color: colors.grey,
    ...fontFamily.medium,
  },
});

export {EmptyView};
