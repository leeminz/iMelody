import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  UIManager,
  Text,
} from 'react-native';
import {colors, isIos, fontFamily, STYLE} from '@util';
import {RadioViewProps} from '@interfaces';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {setFavoriteRadio, setTrack, setUnfavoriteRadio} from '@redux';
import TrackPlayer from 'react-native-track-player';
import {IconFavorite} from '@assets';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const RadioView = React.memo((props: RadioViewProps) => {
  const {track, favorite} = props;
  const dispatch = useDispatch();

  const onTrackViewPress = async () => {
    TrackPlayer.reset();
    dispatch(setTrack(track));
    await TrackPlayer.add(track);
    TrackPlayer.play();
  };

  const onFavoritePress = () => {
    if (favorite) {
      dispatch(setUnfavoriteRadio(track));
    } else {
      dispatch(setFavoriteRadio(track));
    }
  };

  return (
    <TouchableOpacity
      onPress={onTrackViewPress}
      style={styles.container}
      activeOpacity={1}>
      <FastImage
        source={{uri: track.artwork}}
        style={styles.artworkStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.contentView}>
        <View style={styles.textView}>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {track.title}
          </Text>
          <Text style={styles.nationStyle} numberOfLines={1}>
            {track.nation}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onFavoritePress}
          activeOpacity={0.5}
          hitSlop={STYLE.hitSlop}>
          <IconFavorite isActive={favorite} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  artworkStyle: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: colors.grey,
  },
  contentView: {
    flex: 1,
    height: 85,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  textView: {
    flex: 1,
    marginLeft: 5,
    paddingRight: 5,
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontSize: 16,
    color: colors.black,
    ...fontFamily.medium,
  },
  nationStyle: {
    marginTop: 5,
    fontSize: 12,
    color: colors.grey,
    ...fontFamily.regular,
  },
});

export {RadioView};
