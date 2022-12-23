import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  UIManager,
  Text,
} from 'react-native';
import {colors, isIos, fontFamily, STYLE} from '@util';
import {SeeAllViewProps} from '@interfaces';
import {IconSeeAll} from '../assets/svg';
import {useTranslation} from 'react-i18next';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SeeAllView = React.memo((props: SeeAllViewProps) => {
  const {title, onPress, children} = props;
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity
          onPress={onPress}
          style={styles.seeAll}
          activeOpacity={0.5}
          hitSlop={STYLE.hitSlop}>
          <Text style={styles.seeAllStyle}>{t('common.see_all')}</Text>
          <IconSeeAll />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    marginBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: 18,
    color: colors.black,
    ...fontFamily.medium,
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllStyle: {
    marginRight: 5,
    fontSize: 14,
    color: colors.black,
    ...fontFamily.regular,
  },
});

export {SeeAllView};
