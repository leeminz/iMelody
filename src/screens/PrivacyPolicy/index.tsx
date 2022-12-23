import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
import {appName, colors} from '@util';
import {Header} from '@component';

const PrivacyPolicy = () => {
  const {t} = useTranslation();
  return (
    <LinearGradient colors={colors.backgroundColor} style={styles.view}>
      <Header title={t('common.privacy_policy')} />
      <ScrollView style={{marginTop: 30}} showsVerticalScrollIndicator={false}>
        <View style={{...styles.textView, marginTop: 0}}>
          <Text style={styles.headerStyle}>{`${appName} Privacy Policy`}</Text>
          <Text
            style={
              styles.textStyle
            }>{`This privacy policy governs your use of a software application ${appName} ("Application") on a mobile device that were created by MerryBlue ("Company"). The Application provide a radio app.\n`}</Text>
          <Text style={styles.textStyle}>
            {`${appName} is committed to ensuring that your privacy is protected. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. We may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 3th of January, 2022.`}
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerStyle}>{'The Information we collect'}</Text>
          <Text style={styles.boldTextStyle}>
            {'We may collect the following information:'}
          </Text>
          <Text style={styles.textStyle}>
            {' \uFF65 Contact information including email address.'}
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 Information you enter into our Application such as contact information or your hobby data, type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.\n'
            }
          </Text>
          <Text style={styles.boldTextStyle}>
            {'What we do with the information we gather'}
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 We require the above Information to understand your needs and provide you with a better service, and in particular.\n'
            }
          </Text>
          <Text style={styles.boldTextStyle}>{'Internal record keeping'}</Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 We may use the information to improve our products and services.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 We may use software programs to create summary statistics, which are used for such purposes as assessing the number of visitors to the different sections of our Application, what information is of most and least interest, determining technical design specifications, and identifying system performance or problem areas.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 For security purposes and to ensure that this service remains available to all users, we uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 We will not sell, distribute or lease your information to third parties unless we have your permission or are required by law to do so.\n'
            }
          </Text>
          <Text style={styles.boldTextStyle}>
            {'We may disclose Collected Information'}
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 As required by law, such as to comply with a subpoena, or similar legal process.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 With our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 If Company is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email of any change in ownership or uses of this information, as well as any choices you may have regarding this information.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 To advertisers and third party advertising networks and analytics companies as described below under the Section entitled Automatic Data Collection and Advertising.'
            }
          </Text>
          <Text style={styles.textStyle}>
            {
              " \uFF65 To other parties in aggregated form which guarantees data owner's privacy.\n"
            }
          </Text>
          <Text style={styles.boldTextStyle}>
            {'Use of real time location information of the device'}
          </Text>
          <Text style={styles.textStyle}>
            {
              ' \uFF65 This Application does not collect precise information about the location of your mobile device.'
            }
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerStyle}>{'Children'}</Text>
          <Text style={styles.textStyle}>
            {
              'We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at admin@merryblue.llc. We will delete such information from our files within a reasonable time.'
            }
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerStyle}>{'Security'}</Text>
          <Text style={styles.textStyle}>
            {
              'We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.'
            }
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerStyle}>{'Your Consent'}</Text>
          <Text
            style={
              styles.textStyle
            }>{`By using the Services, you are consenting to our processing of User Provided and Automatically Collection information as set forth in this Privacy Policy now and as amended by us. "Processing", means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States or Canada. If you reside outside the U.S. or Canada your information will be transferred to the U.S. or Canada, and processed and stored there under U.S. privacy standards. By using the Application and providing information to us, you consent to such transfer to, and processing in, the US or Canada.`}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerStyle}>{'Contact us'}</Text>
          <Text style={styles.textStyle}>
            {
              'If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at admin@merryblue.llc.'
            }
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export {PrivacyPolicy};
