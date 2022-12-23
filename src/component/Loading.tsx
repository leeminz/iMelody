import React from 'react';
import {View, StyleSheet, UIManager, Image} from 'react-native';
import {LoadingProps} from '@interfaces';
import {isIos} from '@util';
import {radio} from '@assets';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Loading = React.memo((props: LoadingProps) => {
  let {isLoading} = props;
  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image source={radio} style={styles.radioStyle} />
        </View>
      </View>
    );
  } else {
    return null;
  }
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 99,
  },
  background: {
    height: 60,
    width: 60,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  radioStyle: {
    width: 70,
    height: 70,
  },
});

export {Loading};
