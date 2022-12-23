import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, setTrack} from '@redux';
import {colors, formatSecondToMinutesText} from '@util';
import {AdmobBanner, TrackPlayerHeader} from '@component';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  useProgress,
  usePlaybackState,
  State,
  Track,
} from 'react-native-track-player';
import {IconNext, IconPauseBig, IconPlayBig, IconPrevious} from '@assets';
import {BannerAdSize} from '@react-native-admob/admob';

const initialList: Array<Track> = [];

const TrackPlayerView = () => {
  const dispatch = useDispatch();
  const playerState = usePlaybackState();
  const {position, duration} = useProgress(250);
  const app = useSelector((state: RootState) => state.app);
  const [list, setList] = useState(initialList);
  const isPodcast = app.track.type ? false : true;
  const [can, setCan] = useState({
    previous: true,
    next: true,
  });

  useEffect(() => {
    getQueue();
  }, []);

  useEffect(() => {
    getPosition();
  }, [app.track]);

  const getQueue = async () => {
    setList(await TrackPlayer.getQueue());
  };

  const getPosition = async () => {
    const position = await TrackPlayer.getCurrentTrack();
    if (position === 0) {
      setCan({previous: false, next: true});
    } else if (position === list.length - 1) {
      setCan({previous: true, next: false});
    } else {
      setCan({previous: true, next: true});
    }
  };

  const onSlidingComplete = async (value: any) => {
    await TrackPlayer.seekTo(value);
    TrackPlayer.play();
  };

  const onPlayPausePress = async () => {
    if (playerState === State.Playing) {
      TrackPlayer.pause();
    } else if (playerState === State.Paused) {
      TrackPlayer.play();
    }
  };

  const onPreviousPress = async () => {
    await TrackPlayer.skipToPrevious();
    dispatch(
      setTrack(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack())),
    );
    TrackPlayer.play();
  };

  const onNextPress = async () => {
    await TrackPlayer.skipToNext();
    dispatch(
      setTrack(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack())),
    );
    TrackPlayer.play();
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <TrackPlayerHeader title={app.track.description} />
      <View style={styles.totalView}>
        <View style={styles.adsStyle}>
        <Image
        source={{uri: app.track.artwork}}
        style={{width:'80%' , height: '80%'}}
        resizeMode={"contain"}
      />
        </View>
        <View>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {app.track.title}
          </Text>
          <Text style={styles.nationStyle} numberOfLines={1}>
            {app.track.type ? app.track.nation : app.track.artist}
          </Text>
          <Slider
            style={styles.progressBar}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            thumbTintColor={colors.purple}
            minimumTrackTintColor={colors.purple}
            maximumTrackTintColor={colors.grey}
            onSlidingStart={() => TrackPlayer.pause()}
            onSlidingComplete={value => onSlidingComplete(value)}
            disabled={!isPodcast}
          />
          <View style={styles.timeView}>
            <Text style={styles.timeStyle}>
              {formatSecondToMinutesText(parseInt(`${position}`))}
            </Text>
            <Text style={styles.timeStyle}>
              {formatSecondToMinutesText(parseInt(`${duration}`))}
            </Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={onPreviousPress}
            activeOpacity={0.5}
            disabled={!isPodcast || !can.previous || list.length === 1}>
            <IconPrevious
              isActive={isPodcast && can.previous && list.length !== 1}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPlayPausePress} activeOpacity={0.5}>
            {playerState === State.Playing ? (
              <IconPauseBig />
            ) : (
              // playerState === State.Paused &&
              <IconPlayBig />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onNextPress}
            activeOpacity={0.5}
            disabled={!isPodcast || !can.next || list.length === 1}>
            <IconNext isActive={isPodcast && can.next && list.length !== 1} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export {TrackPlayerView};
