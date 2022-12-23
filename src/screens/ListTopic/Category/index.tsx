import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {colors} from '@util';
import {Header, TopicViewRow} from '@component';
import {AppAPI, GlobalService, TopicModel} from '@services';
import {showMessage} from 'react-native-flash-message';

const initialTopic: Array<TopicModel> = [];

const ListTopicCategory = (props: any) => {
  const {category} = props.route.params;
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [topic, setTopic] = useState(initialTopic);

  useEffect(() => {
    firstLoad();
  }, []);

  const firstLoad = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.getTopicByCategory(category.id, 1);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setLastPage(data?.data?.last_page);
        setTopic(data?.data?.data);
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
      const response = await AppAPI.getTopicByCategory(category.id, page + 1);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setTopic(topic.concat(data?.data?.data));
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
      <Header title={category.name} />
      <View style={styles.mainView}>
        <FlatList
          data={topic}
          renderItem={({item}) => {
            return <TopicViewRow topic={item} />;
          }}
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
        />
      </View>
    </LinearGradient>
  );
};

export {ListTopicCategory};
