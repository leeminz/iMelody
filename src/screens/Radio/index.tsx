import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootState} from '@redux';
import {useTranslation} from 'react-i18next';
import {colors} from '@util';
import {
  EmptyView,
  ListView,
  RadioView,
  SeeAllView,
  TopNationView,
} from '@component';
import {useNavigation, useScrollToTop} from '@react-navigation/native';
import {ALL_NATION} from '@routeName';
import {AppAPI, GlobalService} from '@services';
import {showMessage} from 'react-native-flash-message';
import {Track} from 'react-native-track-player';

const initialRadio: Array<Track> = [];
const initialTopNation: Array<string> = [];

const Radio = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const app = useSelector((state: RootState) => state.app);
  const [nation, setNation] = useState(app.nation);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [radio, setRadio] = useState(initialRadio);
  const [topNation, setTopNation] = useState(initialTopNation);
  
  const music = [
    {id: 1,
      nation: '',
      url: 'https://data.chiasenhac.com/down2/2276/1/2275157-5c132788/128/Tong%20Phu%20-%20Keyo.mp3',
      title: 'Tòng Phu',
      artwork: 'https://data.chiasenhac.com/data/cover/175/174246.jpg',
      artist: 'Keyo',
      duration: 0,
      description: '',
      date: '2022',},
      {id: 2,
        nation: '',
        url: 'https://data.chiasenhac.com/down2/2276/1/2275150-9f672b16/128/Waiting%20For%20You%20-%20MONO_%20Onionn.mp3',
        title: 'Waiting For You',
        artwork: 'https://data.chiasenhac.com/data/cover/175/174241.jpg',
        artist: 'Mono, Onionn',
        duration: 0,
        description: '',
        date: '2022',
      },
      {
      id: 3,
    nation: '',
    url: 'https://data.chiasenhac.com/down2/2276/1/2275453-cbdebea3/128/Sao%20Cung%20Duoc%20-%20Thanh%20Dat.mp3',
    title: 'Sao Cũng Được',
    artwork: 'https://data.chiasenhac.com/data/cover/175/174351.jpg',
    artist: 'Thành Đạt, Đông Thiên Đức',
    duration: 0,
    description: '',
    date: '2022',
      },
      {
        id: 4,
        nation: '',
        url: 'https://data.chiasenhac.com/down2/2276/1/2275311-bef6c2aa/128/Co%20Choi%20Co%20Chiu%20-%20Karik_%20OnlyC.mp3',
        title: 'Có Chơi Có Chịu',
        artwork: 'https://data.chiasenhac.com/data/cover/175/174303.jpg',
        artist: 'Karik, OnlyC',
        duration: 0,
        description: '',
        date: '2022',},
        {id: 5,
          nation: '',
          url: 'https://data.chiasenhac.com/down2/2276/1/2275519-486631dc/128/Ai%20Roi%20Cung%20Se%20Khac%20-%20Ha%20Nhi.mp3',
          title: 'Ai Rồi Cũng Sẽ Khác',
          artwork: 'https://data.chiasenhac.com/data/cover/175/174373.jpg',
          artist: 'Hà Nhi',
          duration: 0,
          description: '',
          date: '2022',
        },
        {
        id: 6,
      nation: '',
      url: 'https://data.chiasenhac.com/down2/2276/1/2275309-04b5bfa7/128/Cuoi%20Hong%20Chot%20Nha%20-%20Ut%20Nhi_%20Do%20Thanh%20Du.mp3',
      title: 'Cưới Hông Chốt Nha',
      artwork: 'https://data.chiasenhac.com/data/cover/175/174301.jpg',
      artist: 'Út Nhị, Đỗ Thành Duy',
      duration: 0,
      description: '',
      date: '2022',
        },
        {id: 7,
          nation: '',
          url: 'https://data.chiasenhac.com/down2/2276/1/2275642-3da8faee/128/Lau%20Lau%20Nhac%20Lai%20-%20Ha%20Nhi_%20Khoi.mp3',
          title: 'Lâu Lâu Nhắc Lại',
          artwork: 'https://data.chiasenhac.com/data/cover/175/174416.jpg',
          artist: 'Hà Nhi, Khói',
          duration: 0,
          description: '',
          date: '2022',},
          {id: 8,
            nation: '',
            url: 'https://data.chiasenhac.com/down2/2276/1/2275599-fad85e25/128/Xem%20Nhu%20Em%20Chang%20May%20-%20Luong%20Bich%20Huu_%20T.mp3',
            title: 'Xem Như Em Chẳng May',
            artwork: 'https://data.chiasenhac.com/data/cover/175/174241.jpg',
            artist: 'Lương Bích Hữu',
            duration: 0,
            description: '',
            date: '2022',
          },
          {
          id: 9,
        nation: '',
        url: 'https://data.chiasenhac.com/down2/2276/1/2275453-cbdebea3/128/Sao%20Cung%20Duoc%20-%20Thanh%20Dat.mp3',
        title: 'Sao Cũng Được',
        artwork: 'https://data.chiasenhac.com/data/cover/175/174351.jpg',
        artist: 'Thành Đạt, Đông Thiên Đức',
        duration: 0,
        description: '',
        date: '2022',
          },
          {
            id: 10,
            nation: '',
            url: 'https://data.chiasenhac.com/down2/2276/1/2275062-6e4d8468/128/Ky%20Vong%20Sai%20Lam%20-%20Tang%20Phuc_%20Dinh%20Vu_%20Yu.mp3',
            title: 'Kỳ Vọng Sai Lầm',
            artwork: 'https://data.chiasenhac.com/data/artist_avatar/19/18986.jpg',
            artist: 'Tăng Phúc',
            duration: 0,
            description: '',
            date: '2022',},
            {id: 11,
              nation: '',
              url: 'https://data.chiasenhac.com/down2/2277/1/2276738-1f25d107/128/Vuong%20Van%20TikTok%20Remix_%20-%20Hana%20Cam%20Tien_.mp3',
              title: 'Vương Vấn',
              artwork: 'https://data.chiasenhac.com/data/cover/161/160324.jpg',
              artist: 'Hana Cẩm Tiên',
              duration: 0,
              description: '',
              date: '2022',
            },
            {
            id: 12,
          nation: '',
          url: 'https://data.chiasenhac.com/down2/2277/1/2276744-7a654e81/128/Access%20Intro_%20-%20tripleS.mp3',
          title: 'Acess Intro',
          artwork: 'https://data.chiasenhac.com/data/cover/175/174746.jpg',
          artist: 'TripleS',
          duration: 0,
          description: '',
          date: '2022',
            },
            {id: 13,
      nation: '',
      url: 'https://data.chiasenhac.com/down2/2276/1/2275621-1e20ae35/128/Cuu%20Van%20Kip%20Khong%20-%20Vuong%20Anh%20Tu.mp3',
      title: 'Cứu Vãn Kịp Không',
      artwork: 'https://data.chiasenhac.com/data/cover/175/174414.jpg',
      artist: 'Vương Anh Tú',
      duration: 0,
      description: '',
      date: '2022',},
      {id: 14,
        nation: '',
        url: 'https://data.chiasenhac.com/down2/2276/1/2275154-7f29c1ed/128/Nguoi%20Nhu%20Anh%20-%20Mai%20Tien%20Dung.mp3',
        title: 'Người Như Anh',
        artwork: 'https://data.chiasenhac.com/data/cover/175/174243.jpg',
        artist: 'Mai Tiến Dũng',
        duration: 0,
        description: '',
        date: '2022',
      },
      {
      id: 15,
    nation: '',
    url: 'https://data.chiasenhac.com/down2/2277/1/2276741-113d7298/128/Em%20La%20Nhat%20Mien%20Tay%20YANG%20Remix_%20-%20Vo%20Le.mp3',
    title: 'Em Là Nhất Miền Tây',
    artwork: 'https://data.chiasenhac.com/data/cover/175/174702.jpg',
    artist: 'Võ Lê Mi',
    duration: 0,
    description: '',
    date: '2022',
      },
      {
        id: 16,
        nation: '',
        url: 'https://data.chiasenhac.com/down2/2276/1/2275194-702268f8/128/Co%20Don%20Tren%20Sofa%20-%20Ho%20Ngoc%20Ha.mp3',
        title: 'Cô Đơn Trên Sofa',
        artwork: 'https://data.chiasenhac.com/data/cover/175/174260.jpg',
        artist: 'Hồ Ngọc Hà, Tăng Duy Tân',
        duration: 0,
        description: '',
        date: '2022',},
        {id: 17,
          nation: '',
          url: 'https://data.chiasenhac.com/down2/2275/1/2274831-24b67293/128/An%20Tinh%20Sang%20Trang%20-%20Chau%20Khai%20Phong_%20AC.mp3',
          title: 'Ân Tình Sang Trang',
          artwork: 'https://data.chiasenhac.com/data/cover/175/174198.jpg',
          artist: 'Châu Khải Phong',
          duration: 0,
          description: '',
          date: '2022',
        },
        {
        id: 18,
      nation: '',
      url: 'https://data.chiasenhac.com/down2/2276/1/2275156-b2831721/128/Mat%20Moc%20-%20Pham%20Nguyen%20Ngoc_%20Vanh_%20BMZ.mp3',
      title: 'Mặt Mộc',
      artwork: 'https://data.chiasenhac.com/data/cover/175/174245.jpg',
      artist: 'Phạm Nguyên Ngọc, Vanh, BMZ',
      duration: 0,
      description: '',
      date: '2022',
        },
        {id: 19,
          nation: '',
          url: 'https://data.chiasenhac.com/down2/2276/1/2275768-35a6d485/128/Tu%20Tinh%202%20-%20Trung%20Quan.mp3',
          title: 'Tư Tình',
          artwork: 'https://data.chiasenhac.com/data/cover/128/127061.jpg',
          artist: 'Jang Nguyễn',
          duration: 0,
          description: '',
          date: '2020',},
          {id: 20,
            nation: '',
            url: 'https://data.chiasenhac.com/down2/2275/1/2274561-d2d5cea0/128/Va%20Ngay%20Nao%20Do%20-%20Trung%20Quan.mp3',
            title: 'Và Ngày Nào Đó',
            artwork: 'https://data.chiasenhac.com/data/cover/165/164031.jpg',
            artist: 'Quang Trung',
            duration: 0,
            description: '',
            date: '2022',
          },
          {
          id: 21,
        nation: '',
        url: 'https://data.chiasenhac.com/down2/2275/1/2274553-e0acda2c/128/Anh%20Nho%20Ra%20-%20Vu_%20Trang.mp3',
        title: 'Anh Nhớ Ra',
        artwork: 'https://data.chiasenhac.com/data/cover/175/174165.jpg',
        artist: 'Vũ, Trang',
        duration: 0,
        description: '',
        date: '2022',
          },
          {
            id: 22,
            nation: '',
            url: 'https://data.chiasenhac.com/down2/2276/1/2275177/128/Dinh%20Menh%20Live_%20-%20Noo%20Phuoc%20Thinh.mp3',
            title: 'Định Mệnh',
            artwork: 'https://data.chiasenhac.com/data/cover/16/15186.jpg',
            artist: 'Noo Phước Thịnh',
            duration: 0,
            description: '',
            date: '2022',},
            {id: 23,
              nation: '',
              url: 'https://data51.chiasenhac.com/downloads/1001/1/1000684-4c4e1437/32/Yeu%20Lai%20Tu%20Dau%20-%20Khac%20Viet.m4a',
              title: 'Yêu Lại Từ Đầu',
              artwork: 'https://data.chiasenhac.com/data/cover/1/2238.jpg',
              artist: 'Khắc Việt',
              duration: 0,
              description: '',
              date: '2010',
            },
            {
            id: 24,
          nation: '',
          url: 'https://data25.chiasenhac.com/download2/2207/1/2206490-67cccb4c/32/Buoc%20Qua%20Nhau%20-%20Vu.m4a',
          title: 'Bước Qua Nhau',
          artwork: 'https://data.chiasenhac.com/data/cover/151/150018.jpg',
          artist: 'Vũ',
          duration: 0,
          description: '',
          date: '2022',
            },
  ];

  useScrollToTop(scrollViewRef);

  // useEffect(() => {
  //   getTopNation();
  // }, []);

  // useEffect(() => {
  //   setNation(app.nation);
  // }, [app.nation]);

  // useEffect(() => {
  //   setPage(1);
  //   firstLoad();
  // }, [nation]);

  const getTopNation = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.getTopNationRadio();
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setTopNation(data?.data);
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
      const response = await AppAPI.getStationsByNation(nation, 1);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setLastPage(data?.data?.last_page);
        setRadio(data?.data?.data);
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

  const getRadio = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.getStationsByNation(nation, page + 1);
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        setRadio(radio.concat(data?.data?.data));
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
      getRadio();
    }
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
          <View style={styles.mainView}>

          <FlatList
            data={music}
            renderItem={({item}) => {
              const favorite =
                app.favorite_radio.findIndex(check => check.id === item.id) !==
                -1;
              return <RadioView track={item} favorite={favorite} />;
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyView title={t('common.no_result')} />}
            onEndReached={onEndReached}
            ref={scrollViewRef}
          />
          </View>
    </LinearGradient>
  );
};

export {Radio};
