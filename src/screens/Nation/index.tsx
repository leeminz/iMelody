import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {setNation} from '@redux';
import {useTranslation} from 'react-i18next';
import {colors} from '@util';
import {Header, NationView} from '@component';
import {useNavigation} from '@react-navigation/native';
import {IconSearch} from '@assets';
import {nation} from '../../nation';
import {GlobalService} from '@services';

const Nation = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [listNation, setListNation] = useState(nation.slice(0, 15));

  const onNationPress = (name: string) => {
    Alert.alert(
      'Notice',
      `Do you want to change your nation to ${name}`,
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'default',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(setNation(name));
            navigation.goBack();
          },
          style: 'default',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const onEndReached = () => {
    if (page <= 13) {
      GlobalService.showLoading();
      setListNation(
        listNation.concat(nation.slice(0 + 15 * page, 15 + 15 * page)),
      );
      setTimeout(() => {
        setPage(page + 1);
        GlobalService.hideLoading();
      }, 500);
    }
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <Header title={t('common.nation')} />
      <Text style={styles.textStyle}>
        {
          'This selection will help Cable FM\nrecommend the most suitable radio\nstations for you!'
        }
      </Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <IconSearch />
          <TextInput
            style={styles.search}
            placeholder={'United States, Germany,...'}
            placeholderTextColor={colors.grey}
            onChangeText={value => setFilter(value)}
          />
        </View>
      </View>
      <FlatList
        data={
          filter === ''
            ? listNation
            : nation.filter(check =>
                check.toLowerCase().includes(filter.toLowerCase()),
              )
        }
        renderItem={({item}) => {
          return <NationView name={item} onPress={() => onNationPress(item)} />;
        }}
        showsHorizontalScrollIndicator={false}
        onEndReached={onEndReached}
      />
    </LinearGradient>
  );
};

export {Nation};
