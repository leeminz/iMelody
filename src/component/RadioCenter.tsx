import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  UIManager,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {colors, isIos, fontFamily, STYLE} from '@util';
import {useNavigation} from '@react-navigation/native';
import {RadioCenterProps} from '@interfaces';
import {IconPlay, IconPause, IconQuit, IconShow} from '@assets';
import {TRACK_PLAYER_VIEW} from '@routeName';
import FastImage from 'react-native-fast-image';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

let {width} = Dimensions.get('window');

const RadioCenter = React.memo((props: RadioCenterProps) => {
  const {track} = props;
  const navigation = useNavigation();
  const playerState = usePlaybackState();

  const onRadioCenterPress = () => {
    navigation.navigate(TRACK_PLAYER_VIEW as never);
  };

  const onPlayPausePress = async () => {
    if (playerState === State.Playing) {
      TrackPlayer.pause();
    } else if (playerState === State.Paused || playerState === State.Ready) {
      TrackPlayer.play();
    }
  };

  const onQuitPress = () => {
    TrackPlayer.reset();
  };

  return (
    <TouchableOpacity
      onPress={onRadioCenterPress}
      style={styles.container}
      activeOpacity={1}>
      <TouchableOpacity
        onPress={onRadioCenterPress}
        style={styles.show}
        activeOpacity={1}
        hitSlop={STYLE.hitSlop}>
        <IconShow />
      </TouchableOpacity>
      <FastImage
        source={{uri: `${track.artwork}`}}
        style={styles.artworkStyle}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.contentView}>
        <View style={styles.textView}>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {track.title}
          </Text>
          <Text style={styles.nationStyle} numberOfLines={1}>
            {track.type ? track.nation : track.artist}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={onPlayPausePress}
            style={styles.buttonStyle}>
            {playerState === State.Playing ? (
              <IconPause />
            ) : playerState === State.Paused || playerState === State.Ready ? (
              <IconPlay />
            ) : (
              <ActivityIndicator color={colors.white} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={onQuitPress} style={styles.buttonStyle}>
            <IconQuit />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.radioCenter,
  },
  show: {
    top: -10,
    width: width,
    position: 'absolute',
    alignItems: 'center',
  },
  artworkStyle: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.white,
  },
  contentView: {
    flex: 1,
    marginLeft: 15,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
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
  buttonView: {
    width: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {RadioCenter};
