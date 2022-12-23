import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fontFamily, STYLE} from '@util';
import {useSelector} from 'react-redux';
import {RootState} from '@redux';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  ABOUT_APP,
  LANGUAGE,
  NATION,
  PRIVACY_POLICY,
  REPORT,
  STACK_RADIO,
} from '@routeName';
import {
  IconAboutApp,
  IconBack,
  IconLanguage,
  IconNation,
  IconPrivacyPolicy,
  IconReport,
  IconVersion,
} from '@assets';
import {useTranslation} from 'react-i18next';
import {StackRadio} from '../commonstack';
import {AboutApp, Language, Nation, PrivacyPolicy, Report} from '@screens';
import LinearGradient from 'react-native-linear-gradient';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeviceInfo from 'react-native-device-info';

let {width} = Dimensions.get('window');

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

type routeType = {
  name: string;
  key: string;
};

interface typeProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const CustomDrawer = (props: typeProps) => {
  const {state, descriptors, navigation} = props;
  const {t} = useTranslation();
  const app = useSelector((state: RootState) => state.app);
  const renderLabel = (key: string) => {
    switch (key) {
      case ABOUT_APP:
        return t('common.about_app');
      case PRIVACY_POLICY:
        return t('common.privacy_policy');
      case REPORT:
        return t('common.report');
      case NATION:
        return t('common.nation');
      case LANGUAGE:
        return t('common.language');
      default:
        return '';
    }
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPress = (route: string) => {
    navigation.closeDrawer();
    navigation.navigate(route);
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <TouchableOpacity
          onPress={onPressBack}
          style={styles.backButton}
          activeOpacity={0.5}
          hitSlop={STYLE.hitSlop}>
          <IconBack />
        </TouchableOpacity>
        {state.routes.map((route: routeType, index: Number) => {
          if (route.name !== STACK_RADIO) {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;

            let IconName;
            switch (route.name) {
              case ABOUT_APP:
                IconName = IconAboutApp;
                break;
              case PRIVACY_POLICY:
                IconName = IconPrivacyPolicy;
                break;
              case REPORT:
                IconName = IconReport;
                break;
              case NATION:
                IconName = IconNation;
                break;
              case LANGUAGE:
                IconName = IconLanguage;
                break;
              default:
                IconName = '';
                break;
            }

            return (
              <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => onPress(route.name)}
                style={styles.contain}
                activeOpacity={0.5}
                hitSlop={STYLE.hitSlop}>
                <IconName />
                <View style={styles.textView}>
                  <Text style={styles.text}>{renderLabel(route.name)}</Text>
                  {route.name === NATION && (
                    <Text style={styles.subText} numberOfLines={1}>
                      {app.nation}
                    </Text>
                  )}
                  {route.name === LANGUAGE && (
                    <Text style={styles.subText} numberOfLines={1}>
                      {app.language.label}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }
        })}
        <View style={styles.contain}>
          <IconVersion />
          <View style={styles.textView}>
            <Text style={styles.text}>{t('common.version')}</Text>
            <Text style={styles.subText}>{DeviceInfo.getVersion()}</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

export default function DrawerNavigator() {
  const {i18n} = useTranslation();
  const language = useSelector((state: RootState) => state.app.language.value);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: width * 0.8,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation={true}>
      <Stack.Screen name={STACK_RADIO} component={StackRadio} />
      <Stack.Screen name={ABOUT_APP} component={AboutApp} />
      <Stack.Screen name={PRIVACY_POLICY} component={PrivacyPolicy} />
      <Stack.Screen name={REPORT} component={Report} />
      <Stack.Screen name={NATION} component={Nation} />
      <Stack.Screen name={LANGUAGE} component={Language} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 25,
    alignSelf: 'flex-end',
  },
  contain: {
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 15,
    textAlign: 'left',
    fontSize: 18,
    color: colors.black,
    ...fontFamily.regular,
  },
  subText: {
    marginLeft: 15,
    fontSize: 16,
    color: colors.black,
    ...fontFamily.light,
  },
});
