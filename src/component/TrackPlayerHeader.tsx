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
import {IconDown, IconFavorite} from '@assets';
import {useDispatch, useSelector} from 'react-redux';
import {
  RootState,
  setFavoritePodcast,
  setUnfavoritePodcast,
  setFavoriteRadio,
  setUnfavoriteRadio,
} from '@redux';
import {TrackPlayerHeaderProps} from '@interfaces';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TrackPlayerHeader = React.memo((props: TrackPlayerHeaderProps) => {
  const {title} = props;
  const dispatch = useDispatch();
  const app = useSelector((state: RootState) => state.app);
  const navigation = useNavigation();
  const favorite = app.track.type
    ? app.favorite_radio.findIndex(check => check.id === app.track.id) !== -1
    : app.favorite_podcast.findIndex(check => check.id === app.track.id) !== -1;

  const onLeftIconPress = () => {
    navigation.goBack();
  };

  const onRightIconPress = () => {
    if (app.track.type) {
      if (favorite) {
        dispatch(setUnfavoriteRadio(app.track));
      } else {
        dispatch(setFavoriteRadio(app.track));
      }
    } else {
      if (favorite) {
        dispatch(setUnfavoritePodcast(app.track));
      } else {
        dispatch(setFavoritePodcast(app.track));
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onLeftIconPress}
        style={styles.leftIconStyle}
        activeOpacity={0.5}
        hitSlop={STYLE.hitSlop}>
        <IconDown />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity
        onPress={onRightIconPress}
        style={styles.rightIconStyle}
        activeOpacity={0.5}
        hitSlop={STYLE.hitSlop}>
        <IconFavorite isActive={favorite} />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIconStyle: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 20,
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

export {TrackPlayerHeader};
