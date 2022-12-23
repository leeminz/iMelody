import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, setLanguage} from '@redux';
import {useTranslation} from 'react-i18next';
import {APP_LANGUAGES, colors} from '@util';
import {Header} from '@component';
import DropDownPicker from 'react-native-dropdown-picker';
import {IconTick} from '@assets';

let {height} = Dimensions.get('window');

const Language = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const app = useSelector((state: RootState) => state.app);
  const [value, setValue] = useState(app.language.value);
  const onChangeValue = (value: any) => {
    const language: any = APP_LANGUAGES.find(check => check.value === value);
    dispatch(setLanguage(language));
  };
  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <Header title={t('common.language')} />
      <View style={styles.view}>
        <DropDownPicker
          maxHeight={(height / 3) * 2}
          containerStyle={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listItemContainerStyle={styles.itemStyle}
          selectedItemContainerStyle={styles.selectedStyle}
          labelStyle={styles.labelStyle}
          style={styles.dropdownPicker}
          dropDownDirection={'BOTTOM'}
          textStyle={styles.textDropdown}
          TickIconComponent={() => <IconTick />}
          showArrowIcon={false}
          open={true}
          value={value}
          items={APP_LANGUAGES}
          setOpen={() => {}}
          setValue={setValue}
          theme={'DARK'}
          searchable={true}
          searchPlaceholder={'English, Deutsch,...'}
          searchTextInputStyle={styles.textDropdown}
          onChangeValue={value => onChangeValue(value)}
        />
      </View>
    </LinearGradient>
  );
};

export {Language};
