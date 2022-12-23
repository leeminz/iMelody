import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  UIManager,
  Image,
  Text,
} from 'react-native';
import {
  colors,
  isIos,
  fontFamily,
  STYLE,
  formatDateView,
  formatSecondToMinutesTextHaveZero,
} from '@util';
import {PodcastViewProps} from '@interfaces';
import {useDispatch} from 'react-redux';
import {setFavoritePodcast, setTrack, setUnfavoritePodcast} from '@redux';
import TrackPlayer from 'react-native-track-player';
import {IconFavorite} from '@assets';
import moment from 'moment';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const PodcastView = React.memo((props: PodcastViewProps) => {
  const {podcast, favorite, list} = props;
  const dispatch = useDispatch();

  const onTrackViewPress = async () => {
    TrackPlayer.reset();
    dispatch(setTrack(podcast));
    await TrackPlayer.add(list);
    await TrackPlayer.skip(list.findIndex(check => check.id === podcast.id));
    TrackPlayer.play();
  };

  const onFavoritePress = () => {
    if (favorite) {
      dispatch(setUnfavoritePodcast(podcast));
    } else {
      dispatch(setFavoritePodcast(podcast));
    }
  };

  return (
    <TouchableOpacity
      onPress={onTrackViewPress}
      style={styles.container}
      activeOpacity={1}>
      <Image
        source={{uri: podcast.artwork}}
        style={styles.artworkStyle}
        resizeMode={"cover"}
      />
      <View style={styles.contentView}>
        <View style={styles.textView}>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {podcast.title}
          </Text>
          <Text style={styles.nationStyle} numberOfLines={1}>
            {/* {`${moment(
              podcast.date,
              'YYYY-MM-DD HH:mm:ss',
            ).fromNow()}    ${formatSecondToMinutesTextHaveZero(
              podcast.duration,
            )}`} */}
            {podcast.artist}
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

export {PodcastView};
