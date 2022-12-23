import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {Favorite, Podcast, Radio} from '@screens';
import {FAVORITE, PODCAST, RADIO} from '@routeName';
import {IconFavorite, IconPodcast, IconRadio} from '@assets';
import {colors, fontFamily, shortName} from '@util';
import {Header} from '@component';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

type routeType = {
  name: string;
  key: string;
};

interface typeProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTab = (props: typeProps) => {
  const {state, navigation} = props;
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Header title={shortName} haveSearch={true} />
      <View style={styles.flexRow}>
        {state.routes.map((route: routeType, index: Number) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let IconName;
          let name;
          switch (route.name) {
            case PODCAST:
              IconName = IconPodcast;
              name = t('common.podcast');
              break;
            case RADIO:
              IconName = IconRadio;
              name = t('common.radio');
              break;
            case FAVORITE:
              IconName = IconFavorite;
              name = t('common.favorite');
              break;
            default:
              IconName = IconPodcast;
              name = t('common.podcast');
              break;
          }
          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole={'button'}
              accessibilityState={isFocused ? {selected: true} : {}}
              onPress={onPress}
              style={styles.contain}
              activeOpacity={0.5}>
              <IconName isActive={isFocused} />
              <Text
                style={{
                  ...styles.tabName,
                  color: isFocused ? colors.purple : colors.grey,
                }}>
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTab {...props} />}
      screenOptions={screenOptions}>
      <Tab.Screen name={PODCAST} component={Podcast} />
      <Tab.Screen name={RADIO} component={Radio} />
      <Tab.Screen name={FAVORITE} component={Favorite} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    position: 'absolute',
    height: 150,
  },
  flexRow: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  contain: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tabName: {
    fontSize: 12,
    ...fontFamily.medium,
  },
});
