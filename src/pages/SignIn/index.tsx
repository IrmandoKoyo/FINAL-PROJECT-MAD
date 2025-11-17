import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Gap, TextInput} from '../../components';
import LogoCookEasy from '../../assets/logocookeasy.svg';

const IconMail = require('../../assets/mail.png');
const IconKey = require('../../assets/key.png');
const IconGoogle = require('../../assets/google.png');

const SignIn = ({navigation}) => {
  return (
    <ScrollView
      style={styles.page}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        
        <Gap height={70} />
        
        <View style={styles.headerWrapper}>
          <View style={styles.logoContainer}>
            <LogoCookEasy width={83} height={83} />
          </View>
          
          <Gap height={100} /> 
        </View>

        <Gap height={30} /> 

        <Text style={styles.title}>Masuk ke akun anda</Text>

        <Gap height={24} /> 

        <TextInput
          placeholder="Masukan email anda"
          icon={IconMail}
          keyboardType="email-address"
        />
        <Gap height={16} />

        <TextInput
          placeholder="Masukan kata sandi anda"
          icon={IconKey}
          secureTextEntry={true}
        />
        <Gap height={12} />

        <View style={styles.linkWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Mendaftar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Lupa kata sandi?</Text>
          </TouchableOpacity>
        </View>

        <Gap height={24} />

        <Button
          label="Masuk"
          onPress={() => navigation.replace('HomePage')}
          color="#009885"
          textColor="#FFFFFF"
        />

        <Gap height={20} />

        <Text style={styles.textOr}>Atau</Text>
        <Gap height={10} />
        <Text style={styles.textSubOr}>Masuk dengan</Text>
        <Gap height={20} />

        <View style={styles.socialWrapper}>
          <Image source={IconGoogle} style={styles.iconSocial} />
        </View>

        <Gap height={50} />

        <Text style={styles.footerText}>CookEasy</Text>
        <Gap height={20} />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#EEF9F5',
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  headerWrapper: {
    alignItems: 'center',
  },
  logoContainer: {
    padding: 1,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#21A496',
  },
  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#009885',
  },
  textOr: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#009885',
  },
  textSubOr: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#009885',
  },
  socialWrapper: {
    alignItems: 'center',
  },
  iconSocial: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#21A496',
  },
});