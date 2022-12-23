import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
import {appName, colors} from '@util';
import {Header} from '@component';

const AboutApp = () => {
  const {t} = useTranslation();
  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <Header title={t('common.about_app')} />
      <ScrollView style={{marginTop: 30}} showsVerticalScrollIndicator={false}>
        <View style={{...styles.textView, marginTop: 0}}>
          <Text style={styles.headerStyle}>{'Introduce'}</Text>
          <Text style={styles.textStyle}>
            {`ENJOY YOUR RADIO ANYTIME, ANYWHERE\n${appName} app is a simple radio app that includes everything you need, including live news, sports, music, podcasts, and your favorite radio stations worldwide.`}
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerStyle}>
            {'All the radio you need in one app'}
          </Text>
          <Text style={styles.boldTextStyle}>
            {' \uFF65 '}
            <Text style={styles.textStyle}>
              {
                'Enjoy even more than 100+ popular channels in this app: VOV, BBC, talkSPORT, BBC Radio 1Xtra, Classic FM, All Things Considered, Delilah,...\n'
              }
            </Text>
          </Text>
          <Text style={styles.boldTextStyle}>
            {' \uFF65 News: '}
            <Text style={styles.textStyle}>
              {
                'Stay up-to-date on the latest news from local, national, and international sources, including Radio Emigranti, Nehanda Radio, BBC Radio, CBLA-FM, CBC Radio One Toronto live,...\n'
              }
            </Text>
          </Text>
          <Text style={styles.boldTextStyle}>
            {' \uFF65 Sports: '}
            <Text style={styles.textStyle}>
              {
                'Listen to live talkSPORT, BBC Radio 5 Live, Radio 5, and more from anywhere, as well as local, national, and international sports talk radio stations.\n'
              }
            </Text>
          </Text>
          <Text style={styles.boldTextStyle}>
            {' \uFF65 Music: '}
            <Text style={styles.textStyle}>
              {
                'You can create your own exclusive online music channels, such as KBS 2FM, Cool FM, Antenne Bayern, etc., as well as your favorite radio such as Love Radio 103.7FM, BBC Radio 1,... provide music for every mood.\n'
              }
            </Text>
          </Text>
          <Text style={styles.boldTextStyle}>
            {' \uFF65 Podcasts: '}
            <Text style={styles.textStyle}>
              {
                'Enjoy your interests by listening to your favorite podcasts on this radio app.\n'
              }
            </Text>
          </Text>
          <Text style={styles.boldTextStyle}>
            {' \uFF65 Radio: '}
            <Text style={styles.textStyle}>
              {
                'Listen to more than 100,000+ AM, FM, and famous radio stations broadcasting from many countries on your mobile device.'
              }
            </Text>
          </Text>
        </View>
        <View style={styles.textView}>
          <Text
            style={
              styles.headerStyle
            }>{`What is the "${appName}" for you?`}</Text>
          <Text style={styles.boldTextStyle}>{`1. 100% "FREE"`}</Text>
          <Text style={styles.textStyle}>
            {
              'As a gift to you, This app is completely free. We created it to make it easier for you to get more enjoyment out of your life and your hobbies.\n'
            }
          </Text>
          <Text style={styles.boldTextStyle}>
            {'2. Update the latest news'}
          </Text>
          <Text style={styles.textStyle}>
            {
              'All the famous channels (VOV, BBC, talkSPORT, BBC Radio 1Xtra, Classic FM, All Things Considered, Delilah,...), as well as local stations such as UK radio, Indian radio, and more, are available 24 hours a day, seven days a week.\n\nFurthermore, you are free to listen to any radio station you want and to add your favorite love to it.\n'
            }
          </Text>
          <Text style={styles.boldTextStyle}>{'3. Music in your style'}</Text>
          <Text style={styles.textStyle}>
            {'With '}
            <Text style={styles.boldTextStyle}>
              {
                'BBC Radio 6 Music, Kisstory, Delilah, Radio Emigranti, WVUV-FM V103, '
              }
            </Text>
            {`and other stations, you can choose the ideal music for any occasion. Furthermore, you can listen to local stations and programming from the top online AM/FM channels available.\n\nYou can now listen to your favorite radio stations from all over the country by downloading the ${appName} app on your smartphone.\n`}
          </Text>
          <Text style={styles.boldTextStyle}>
            {'4. Your passionate podcasts'}
          </Text>
          <Text style={styles.textStyle}>
            {`Listen to top-rated radio series and follow trending chart-toppers as well as niche favorites with ${appName} app.\n`}
          </Text>
          <Text style={styles.boldTextStyle}>
            {'5. Listen anywhere, anytime'}
          </Text>
          <Text style={styles.textStyle}>
            {`This application is suitable for a wide range of platforms. With just a smartphone and the ${appName} app on it, you can listen to your favorite radio station anywhere, at any time, and in high quality. This app makes it easy to do this.`}
          </Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textStyle}>
            {
              'Last but not least, DOWNLOAD FREE in TEN SECONDS and listen to FREE on your radio RIGHT NOW'
            }
          </Text>
        </View>
        <View style={styles.textView}>
          <Text
            style={{
              ...styles.headerStyle,
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {`${appName}\napp-Listen on your way`}
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export {AboutApp};
