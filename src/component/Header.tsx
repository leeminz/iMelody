import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  UIManager,
  Text,
} from 'react-native';
import {STYLE, colors, isIos, fontFamily} from '@util';
import {useNavigation} from '@react-navigation/native';
import {HeaderProps} from '@interfaces';
import {IconBack, IconMenu, IconSearch} from '@assets';
import {SEARCH} from '@routeName';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Header = React.memo((props: HeaderProps) => {
  const {title, haveSearch} = props;
  const navigation = useNavigation();

  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  const onRightIconPress = () => {
    navigation.navigate(SEARCH as never);
  };

  return (
    <View style={styles.container}>
      {haveSearch ? (
        <TouchableOpacity
          onPress={onMenuPress}
          style={styles.leftIconStyle}
          activeOpacity={0.5}
          hitSlop={STYLE.hitSlop}>
          <IconMenu />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onBackPress}
          style={styles.leftIconStyle}
          activeOpacity={0.5}
          hitSlop={STYLE.hitSlop}>
          <IconBack />
        </TouchableOpacity>
      )}

      <View style={styles.titleView}>
        <Text style={styles.headerText}>{title}</Text>
        {haveSearch && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIconStyle}
            activeOpacity={0.5}
            hitSlop={STYLE.hitSlop}>
            <IconSearch />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 40,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftIconStyle: {
    width: 30,
    height: 30,
  },
  titleView: {
    flex: 1,
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    color: colors.black,
    ...fontFamily.medium,
  },
  rightIconStyle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Header};
