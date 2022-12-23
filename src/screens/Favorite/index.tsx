import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootState} from '@redux';
import {useTranslation} from 'react-i18next';
import {colors} from '@util';
import {EmptyView, Filter, PodcastView, RadioView} from '@component';

const Favorite = () => {
  const {t} = useTranslation();
  const app = useSelector((state: RootState) => state.app);
  const [filter, setFilter] = useState('Podcast');
  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <View style={styles.mainView}>
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
      {filter === 'Podcast' ? (
        <FlatList
          data={app.favorite_podcast}
          renderItem={({item}) => {
            return (
              <PodcastView
                podcast={item}
                favorite={true}
                list={app.favorite_podcast}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyView title={t('common.no_favorite_podcast')} />
          }
        />
      ) : (
        <FlatList
          data={app.favorite_radio}
          renderItem={({item}) => {
            return <RadioView track={item} favorite={true} />;
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyView title={t('common.no_favorite_radio')} />
          }
        />
      )}
    </LinearGradient>
  );
};

export {Favorite};
