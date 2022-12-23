import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  UIManager,
  Text,
} from 'react-native';
import {colors, isIos, fontFamily, STYLE} from '@util';
import {TopicViewRowProps} from '@interfaces';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {TOPIC_DETAIL} from '@routeName';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TopicViewRow = React.memo((props: TopicViewRowProps) => {
  const {topic} = props;
  const navigation = useNavigation();

  const onTopicViewPress = async () => {
    navigation.navigate(TOPIC_DETAIL as never, {topic_id: topic.id} as never);
  };

  return (
    <TouchableOpacity
      onPress={onTopicViewPress}
      style={styles.container}
      activeOpacity={1}>
      <FastImage
        source={{uri: topic.image}}
        style={styles.artworkStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.contentView}>
        <View style={styles.textView}>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {topic.topic_name}
          </Text>
          <Text style={styles.nationStyle} numberOfLines={1}>
            {`${topic.num_podcast_count} episodes`}
          </Text>
        </View>
        {/* <TouchableOpacity
          onPress={onFavoritePress}
          activeOpacity={0.5}
          hitSlop={STYLE.hitSlop}>
          <IconFavorite isActive={favorite} />
        </TouchableOpacity> */}
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
    paddingVertical: 7.5,
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

export {TopicViewRow};
