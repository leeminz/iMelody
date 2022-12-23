import {AdmobBannerProps} from '@interfaces';
import {BannerAd, BannerAdSize} from '@react-native-admob/admob';
import {ADMOB_IDS, colors, isIos} from '@util';
import React from 'react';
import {StyleSheet, UIManager, View} from 'react-native';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AdmobBanner = React.memo((props: AdmobBannerProps) => {
  const {size} = props;
  return (
    <View style={styles.container}>
      <BannerAd
        size={size || BannerAdSize.ADAPTIVE_BANNER}
        unitId={ADMOB_IDS.banner}
        onAdFailedToLoad={e => console.log({e})}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

export {AdmobBanner};
