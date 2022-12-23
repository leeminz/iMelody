import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  UIManager,
  Text,
} from 'react-native';
import {colors, isIos, fontFamily} from '@util';
import {TopicViewProps} from '@interfaces';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {TOPIC_DETAIL} from '@routeName';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TopicView = React.memo((props: TopicViewProps) => {
  const {topic, isRectangle} = props;
  const navigation = useNavigation();

  const onTopicViewPress = async () => {
    navigation.navigate(TOPIC_DETAIL as never, {topic_id: topic.id} as never);
  };

  return (
    <TouchableOpacity
      onPress={onTopicViewPress}
      style={{...styles.container, width: isRectangle ? 240 : 120}}
      activeOpacity={1}>
      <FastImage
        source={{uri: topic.image}}
        style={{...styles.imageStyle, width: isRectangle ? 240 : 120}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textView}>
        <Text style={styles.topicNameStyle} numberOfLines={isRectangle ? 1 : 2}>
          {topic.topic_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  imageStyle: {
    height: 120,
    borderRadius: 12,
    backgroundColor: colors.grey,
  },
  textView: {
    paddingHorizontal: 5,
  },
  topicNameStyle: {
    marginTop: 10,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.medium,
  },
});

export {TopicView};
