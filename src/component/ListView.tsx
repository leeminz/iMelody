import React from 'react';
import {StyleSheet, View, UIManager, Text} from 'react-native';
import {colors, isIos, fontFamily} from '@util';
import {ListViewProps} from '@interfaces';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ListView = React.memo((props: ListViewProps) => {
  const {title} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  titleStyle: {
    marginLeft: 15,
    fontSize: 18,
    color: colors.black,
    ...fontFamily.medium,
  },
});

export {ListView};
