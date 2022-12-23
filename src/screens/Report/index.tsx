import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
import {colors} from '@util';
import {Header} from '@component';
import DropDownPicker from 'react-native-dropdown-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IconTick} from '@assets';
import {AppAPI, GlobalService} from '@services';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

const initialReport = {
  content: '',
  full_name: '',
  email: '',
};

const Report = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const problem = [
    {label: t('common.error_message'), value: 'Error message'},
    {label: t('common.product_suggestions'), value: 'Product suggestions'},
    {label: t('common.other_problems'), value: 'Other problems'},
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [report, setReport] = useState(initialReport);
  const check =
    report.content !== '' && report.full_name !== '' && report.email !== ''
      ? false
      : true;

  const onReportChange = (status: string, value: string) => {
    setReport(previousState => {
      return {...previousState, [status]: value};
    });
  };

  const onReportPress = async () => {
    GlobalService.showLoading();
    try {
      const response = await AppAPI.reportFeedback(
        report.email,
        report.full_name,
        report.content,
        value,
      );
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        showMessage({
          message: 'Report successfully!',
          type: 'success',
        });
        setValue('');
        setReport(initialReport);
        navigation.goBack();
      } else {
        showMessage({
          message: 'Report fail! Please try again later',
          type: 'danger',
        });
      }
    } catch (error) {
      GlobalService.hideLoading();
      showMessage({
        message: 'Report fail! Please try again later',
        type: 'danger',
      });
    }
  };

  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <Header title={t('common.report')} />
      <View style={{...styles.textView, zIndex: 10, marginTop: 30}}>
        <Text style={styles.textStyle}>{t('common.problem')}</Text>
        <DropDownPicker
          style={styles.dropdownPicker}
          dropDownContainerStyle={styles.dropdownContainer}
          listItemContainerStyle={styles.itemStyle}
          selectedItemContainerStyle={styles.selectedStyle}
          textStyle={styles.textDropdown}
          TickIconComponent={() => <IconTick />}
          open={open}
          value={value}
          items={problem}
          setOpen={setOpen}
          setValue={setValue}
          theme={'DARK'}
          placeholder={t('common.error')}
          placeholderStyle={{color: colors.grey}}
          dropDownDirection={'BOTTOM'}
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{t('common.content')}</Text>
          <TextInput
            style={{...styles.textBox, height: 100}}
            onChangeText={text => onReportChange('content', text)}
            multiline={true}
            textAlignVertical={'top'}
            numberOfLines={5}
            placeholder={
              value === '' ? t('common.problem') : t('common.enter_content')
            }
            placeholderTextColor={colors.grey}
            editable={value !== ''}
            defaultValue={report.content}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{t('common.name')}</Text>
          <TextInput
            style={styles.textBox}
            onChangeText={text => onReportChange('full_name', text)}
            editable={value !== ''}
            defaultValue={report.full_name}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{t('common.email')}</Text>
          <TextInput
            style={styles.textBox}
            onChangeText={text => onReportChange('email', text)}
            editable={value !== ''}
            defaultValue={report.email}
          />
        </View>
        <View style={styles.textView}>
          <TouchableOpacity
            onPress={onReportPress}
            style={{
              ...styles.sendButton,
              backgroundColor: check ? colors.grey : colors.purple,
            }}
            activeOpacity={0.5}
            disabled={check}>
            <Text
              style={{
                ...styles.textStyle,
                marginBottom: 0,
                color: colors.white,
              }}>
              {t('common.send')}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export {Report};
