import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, Gap, TextInput} from '../../components';
import LogoCookEasy from '../../assets/logocookeasy.svg';

const IconMail = require('../../assets/mail.png');

const ForgotPassword = ({navigation}) => {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        
        <Gap height={70} />

        <View style={styles.headerWrapper}>
          <View style={styles.logoContainer}>
            <LogoCookEasy width={83} height={83} />
          </View>
        </View>

        <Gap height={150} />

        <Text style={styles.title}>Lupa kata sandi anda?</Text>
        
        <Gap height={20} />


        <TextInput
          placeholder="Masukan email anda"
          icon={IconMail}
          keyboardType="email-address"
        />
        <Gap height={24} />

        <Button
          label="Kirim"
          color="#009885"
          textColor="#FFFFFF"
          onPress={() => console.log('Reset Password Action')}
        />
        <Gap height={20} />

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.backToLogin}>Kembali ke halaman login</Text>
        </TouchableOpacity>

        <View style={{flex: 1}} />

        <Text style={styles.footerText}>CookEasy</Text>
        <Gap height={20} />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#EEF9F5',
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
  },
  headerWrapper: {
    alignItems: 'center',
  },
  logoContainer: {
    padding: 1,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#21A496',
  },
  backToLogin: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#009885',
  },
  footerText: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#21A496',
    textAlign: 'center',
  },
});