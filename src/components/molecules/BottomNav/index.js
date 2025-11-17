import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

// IMPORT ICON-ICON DARI ASSETS
// Perhatikan path-nya berubah jadi ../../assets
import HomeBar from '../../../assets/homebar.svg';
import UtensilsBar from '../../../assets/utensilsbar.svg';
import PlusBar from '../../../assets/plusbar.svg';
import LoveBar from '../../../assets/lovebar.svg';
import UserBar from '../../../assets/userbar.svg';

// Kita pakai {navigation} biar bisa pindah halaman
const BottomNav = ({navigation}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <HomeBar width={26} height={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CookedPage')}>
        <UtensilsBar width={26} height={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AddRecipePage')}>
        <PlusBar width={26} height={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('FavoritePage')}>
        <LoveBar width={26} height={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
        <UserBar width={26} height={26} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

// Style untuk navbar-nya kita pindah ke sini
const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#22A5974C',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    zIndex: 100,
  },
});