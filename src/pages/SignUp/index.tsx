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

const IconUser = require('../../assets/user.png');
const IconMail = require('../../assets/mail.png');
const IconKey = require('../../assets/key.png');
const IconGoogle = require('../../assets/google.png');

const SignUp = ({navigation}) => {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        
        <Gap height={60} />
        
        <View style={styles.headerWrapper}>
          <View style={styles.logoContainer}>
            <LogoCookEasy width={83} height={83} />
          </View>
        </View>

        <Gap height={40} />

        <Text style={styles.title}>Daftar untuk memulai</Text>

        <Gap height={20} />

        <TextInput placeholder="Masukan nama anda" icon={IconUser} />
        <Gap height={10} />

        <TextInput
          placeholder="Masukan email anda"
          icon={IconMail}
          keyboardType="email-address"
        />
        <Gap height={10} />

        <TextInput
          placeholder="Masukan kata sandi anda"
          icon={IconKey}
          secureTextEntry={true}
        />
        <Gap height={10} />

        <TextInput
          placeholder="Konfirmasi kata sandi anda"
          icon={IconKey}
          secureTextEntry={true}
        />
        <Gap height={10} />

        <View style={styles.linkWrapper}>
          <Text style={styles.haveAccountText}>Sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.haveAccountLink}>Masuk</Text>
          </TouchableOpacity>
        </View>

        <Gap height={10} /> 

        <Button
          label="Mendaftar"
          color="#009885"
          textColor="#FFFFFF"
          onPress={() => console.log('Register Action')}
        />

        <Gap height={20} />

        <Text style={styles.textOr}>Atau</Text>
        
        <Gap height={10} /> 
        
        <Text style={styles.textSubOr}>Mendaftar dengan</Text>
        <Gap height={20} />

        <View style={styles.socialWrapper}>
          <Image source={IconGoogle} style={styles.iconSocial} />
        </View>

        <Gap height={40} />

        <Text style={styles.footerText}>CookEasy</Text>
        <Gap height={20} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
    elevation: 10,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#21A496',
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  haveAccountText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#009885',
  },
  haveAccountLink: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#009885',
  },
  textOr: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#009885',
  },
  textSubOr: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
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
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#21A496',
    textAlign: 'center',
  },
});