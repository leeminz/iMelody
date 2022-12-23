import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
import {colors} from '@util';
import {CategoryView, Header} from '@component';
import {AppAPI, CategoryModel, GlobalService} from '@services';
import {showMessage} from 'react-native-flash-message';

const initialCategory: Array<CategoryModel> = [];

const Category = () => {
  const {t} = useTranslation();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    firstLoad();
  }, []);

  const firstLoad = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.getListCategory(1);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setLastPage(data?.data?.last_page);
        setCategory(data?.data?.data);
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
      const response = await AppAPI.getListCategory(page + 1);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setCategory(category.concat(data?.data?.data));
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
      <Header title={t('common.category')} />
      <View style={styles.mainView}>
        <FlatList
          data={category}
          renderItem={({item}) => {
            return <CategoryView category={item} />;
          }}
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
        />
      </View>
    </LinearGradient>
  );
};

export {Category};
