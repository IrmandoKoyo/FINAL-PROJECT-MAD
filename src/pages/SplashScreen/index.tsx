import {StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../assets/Logo.svg';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Logo width={130} height={130} />
      
      <Gap height={20} />
      
      <Text style={styles.title}>CookEasy</Text>
      
      <Gap height={6} />
      
      <Text style={styles.subtitle}>Discover • Cook • Enjoy</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22A597',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});