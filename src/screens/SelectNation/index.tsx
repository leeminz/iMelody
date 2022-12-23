import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '@util';
import {styles} from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch} from 'react-redux';
import {nation} from '../../nation';
import {setFirstOpenApp, setNation} from '@redux';
import {IconTick} from '@assets';
import {AppAPI, GlobalService} from '@services';

const SelectNation = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('United States');

  const onCompletePress = () => {
    dispatch(setNation(value));
    signDevice();
  };

  const signDevice = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.signupDevice();
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        dispatch(setFirstOpenApp());
      }
    } catch (error) {
      GlobalService.hideLoading();
    }
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.container}>
      <Text style={styles.headerStyle}>{'Select your nation'}</Text>
      <Text style={styles.textStyle}>
        {
          'This selection will help Cable FM\nrecommend the most suitable radio\nstations for you!'
        }
      </Text>
      <DropDownPicker
        maxHeight={300}
        containerStyle={{paddingHorizontal: 15}}
        dropDownContainerStyle={styles.dropdownContainer}
        listItemContainerStyle={styles.itemStyle}
        selectedItemContainerStyle={styles.selectedStyle}
        labelStyle={styles.labelStyle}
        style={styles.dropdownPicker}
        dropDownDirection={'BOTTOM'}
        textStyle={styles.textDropdown}
        TickIconComponent={() => <IconTick />}
        open={open}
        value={value}
        items={nation.map(item => ({label: item, value: item}))}
        setOpen={setOpen}
        setValue={setValue}
        theme={'DARK'}
        searchable={true}
        searchPlaceholder={'United States, Germany,...'}
        searchTextInputStyle={styles.textDropdown}
      />
      <View style={styles.textView}>
        <TouchableOpacity
          onPress={onCompletePress}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={{...styles.labelStyle, color: colors.white}}>
            {'Complete'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export {SelectNation};
