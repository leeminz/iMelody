import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootState} from '@redux';
import {useTranslation} from 'react-i18next';
import {colors} from '@util';
import {Header, ListView, PodcastView} from '@component';
import {GlobalService, TopicModel} from '@services';
import {showMessage} from 'react-native-flash-message';
import {AppAPI} from '@services';
import FastImage from 'react-native-fast-image';
import {Track} from 'react-native-track-player';

const initialTopic: TopicModel = {
  id: 0,
  topic_name: '',
  image: '',
  description: '',
  categories: {
    id: 0,
    name: '',
  },
  num_podcast_count: 0,
};

const initialPodcast: Array<Track> = [];

const TopicDetail = (props: any) => {
  const {topic_id} = props.route.params;
  const {t} = useTranslation();
  const app = useSelector((state: RootState) => state.app);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [topic, setTopic] = useState(initialTopic);
  const [podcast, setPodcast] = useState(initialPodcast);

  useEffect(() => {
    getDetail();
    firstLoad();
  }, []);

  const getDetail = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.getTopicDetail(topic_id);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setTopic(data?.data);
      } else {
        showMessage({
          message: 'Something when wrong! Please try again later!',
          type: 'danger',
        });
      }
    } catch (error) {
      GlobalService.hideLoading();
      showMessage({
        message: 'Something when wrong! Please try again later!',
        type: 'danger',
      });
    }
  };

  const firstLoad = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.getPodcastByTopic(1, topic_id);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setLastPage(data?.data?.last_page);
        setPodcast(data?.data?.data);
        setTotal(data?.data?.total);
      } else {
        showMessage({
          message: 'Something when wrong! Please try again later!',
          type: 'danger',
        });
      }
    } catch (error) {
      GlobalService.hideLoading();
      showMessage({
        message: 'Something when wrong! Please try again later!',
        type: 'danger',
      });
    }
  };

  const getList = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.getPodcastByTopic(page + 1, topic_id);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setPodcast(podcast.concat(data?.data?.data));
        setPage(page + 1);
      } else {
        showMessage({
          message: 'Something when wrong! Please try again later!',
          type: 'danger',
        });
      }
    } catch (error) {
      GlobalService.hideLoading();
      showMessage({
        message: 'Something when wrong! Please try again later!',
        type: 'danger',
      });
    }
  };

  const onEndReached = () => {
    if (lastPage > page) {
      getList();
    }
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <Header title={t('common.topic')} />
      {topic !== initialTopic && (
        <>
          <View style={styles.infoView}>
            <FastImage
              source={{uri: topic.image}}
              style={styles.imageStyle}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.textView}>
              <Text style={styles.topicNameStyle} numberOfLines={2}>
                {topic.topic_name}
              </Text>
              <Text style={styles.categoryStyle} numberOfLines={1}>
                {topic.categories?.name}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={styles.descriptionView}
            activeOpacity={1}>
            <Text style={styles.descriptionStyle} numberOfLines={show ? 0 : 2}>
              {topic.description}
            </Text>
            <Text style={styles.showStyle}>
              {show ? t('common.show_less') : t('common.show_more')}
            </Text>
          </TouchableOpacity>
          <ListView title={`${t('common.all_episodes')} (${total})`} />
          <FlatList
            data={podcast}
            renderItem={({item}) => {
              const favorite =
                app.favorite_podcast.findIndex(
                  check => check.id === item.id,
                ) !== -1;
              return (
                <PodcastView
                  podcast={item}
                  favorite={favorite}
                  list={podcast}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            onEndReached={onEndReached}
          />
        </>
      )}
    </LinearGradient>
  );
};

export {TopicDetail};
