import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, TextInput, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
import {colors, STYLE} from '@util';
import {EmptyView, Filter, ListView, PodcastView, RadioView} from '@component';
import {useNavigation} from '@react-navigation/native';
import {AppAPI, GlobalService} from '@services';
import {showMessage} from 'react-native-flash-message';
import {IconSearch} from '@assets';
import {useSelector} from 'react-redux';
import {RootState} from '@redux';
import {Track} from 'react-native-track-player';

const initialResult: Array<Track> = [];

const Search = () => {
  const {t} = useTranslation();
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const app = useSelector((state: RootState) => state.app);
  const [filter, setFilter] = useState('Podcast');
  const [value, setValue] = useState('');
  const [resultPodcast, setResultPodcast] = useState(initialResult);
  const [resultRadio, setResultRadio] = useState(initialResult);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (value !== '') {
      setPage(1);
      firstLoad();
    }
  }, [filter]);

  const firstLoad = async () => {
    GlobalService.showLoading();
    try {
      let response;
      if (filter === 'Podcast') {
        response = await AppAPI.searchPodcast(value, 1);
      } else if (filter === 'Radio') {
        response = await AppAPI.searchRadio(value, 1);
      }
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setLastPage(data?.data?.last_page);
        if (filter === 'Podcast') {
          setResultPodcast(data?.data?.data);
        } else if (filter === 'Radio') {
          setResultRadio(data?.data?.data);
        }
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

  const searchStation = async () => {
    GlobalService.showLoading();
    try {
      let response;
      if (filter === 'Podcast') {
        response = await AppAPI.searchPodcast(value, page + 1);
      } else if (filter === 'Radio') {
        response = await AppAPI.searchRadio(value, page + 1);
      }
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        if (filter === 'Podcast') {
          setResultPodcast(resultPodcast.concat(data?.data?.data));
        } else if (filter === 'Radio') {
          setResultRadio(resultRadio.concat(data?.data?.data));
        }
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

  const onEndEditing = () => {
    if (value !== '') {
      setPage(1);
      firstLoad();
    }
  };

  const onEndReached = () => {
    if (lastPage > page) {
      searchStation();
    }
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <IconSearch />
          <TextInput
            ref={inputRef}
            style={styles.search}
            placeholder={t('common.search')}
            placeholderTextColor={colors.grey}
            onChangeText={text => setValue(text)}
            onEndEditing={onEndEditing}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
            hitSlop={STYLE.hitSlop}>
            <Text style={styles.cancelText}>{t('common.cancel')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <FlatList
          data={[t('common.podcast'), t('common.radio')]}
          horizontal={true}
          ListHeaderComponent={<View style={{width: 15}} />}
          renderItem={({item}) => {
            return (
              <Filter
                name={item}
                onPress={() =>
                  setFilter(item === t('common.podcast') ? 'Podcast' : 'Radio')
                }
                isActive={
                  (filter === 'Podcast' && item === t('common.podcast')) ||
                  (filter === 'Radio' && item === t('common.radio'))
                }
                color={colors.purple}
              />
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ListView title={`${t('common.result')} (${total})`} />
      <FlatList
        data={filter === 'Podcast' ? resultPodcast : resultRadio}
        renderItem={({item}) => {
          if (filter === 'Podcast') {
            const favorite =
              app.favorite_podcast.findIndex(check => check.id === item.id) !==
              -1;
            return (
              <PodcastView podcast={item} favorite={favorite} list={[item]} />
            );
          } else {
            const favorite =
              app.favorite_radio.findIndex(check => check.id === item.id) !==
              -1;
            return <RadioView track={item} favorite={favorite} />;
          }
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyView title={t('common.no_result')} />}
        onEndReached={onEndReached}
      />
    </LinearGradient>
  );
};

export {Search};
