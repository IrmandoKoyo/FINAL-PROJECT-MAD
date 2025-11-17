import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Button, Gap, TextInput} from '../../components';

const EditProfilePage = ({navigation}) => {
  const [name, setName] = useState('Mike Madclass');
  const [email, setEmail] = useState('mikemad@madclass.com');
  const [oldPassword, setOldPassword] = useState('*******************');
  const [newPassword, setNewPassword] = useState('*******************');

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  const handleSave = () => {
    console.log('Data disimpan');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Edit Profile</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
          </View>

          <Gap height={30} />

          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
              }}
              style={styles.avatar}
            />
          </View>

          <Gap height={30} />

          <TextInput
            label="Nama"
            value={name}
            onChangeText={setName}
          />
          <Gap height={16} /> 

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Gap height={16} />

          <TextInput
            label="Kata sandi lama"
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry={true}
          />
          <Gap height={16} />

          <TextInput
            label="Konfirmasi kata sandi baru"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={true}
          />

          <Gap height={24} /> 

          <Button label="Simpan perubahan" onPress={handleSave} />

          <Gap height={30} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfilePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF9F5',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#000',
  },
  logoutText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#FF0202',
  },

  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#DDD',
  },
});