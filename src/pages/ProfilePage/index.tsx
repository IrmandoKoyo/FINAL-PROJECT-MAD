import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {Gap, Button, BottomNav} from '../../components';

import Star from '../../assets/star.svg';
import Utensils from '../../assets/utensils.svg';
import Heart from '../../assets/heart-outline.svg';
import HeartSolid from '../../assets/heart-outline.svg';

import {fullRecipes} from '../../data/recipes';

const ProfilePage = ({navigation}) => {
  const createdRecipes = fullRecipes.slice(0, 2);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  const renderProfileHeader = () => {
    return (
      <>
        <View style={styles.profileCard}>
          
          <Gap height={10} />

          <View style={styles.profileRow}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
              }}
              style={styles.avatar}
            />

            <Gap width={20} />

            <View style={styles.infoColumn}>
              <Text style={styles.userName}>Mike Madclass</Text>
              <Gap height={4} />

              <View style={styles.statRow}>
                <HeartSolid width={20} height={20} fill="#FF0000" />
                <Gap width={8} />
                <Text style={styles.statText}>8 Favorit</Text>
              </View>

              <Gap height={4} />

              <View style={styles.statRow}>
                <Utensils width={20} height={20} fill="#FF0000" />
                <Gap width={8} />
                <Text style={styles.statText}>5 Dimasak</Text>
              </View>
            </View>
          </View>

          <Gap height={15} />

          <View style={styles.emailRow}>
            <Text style={{fontSize: 16}}>✉️</Text>
            <Gap width={8} />
            <Text style={styles.emailText}>mikemad@madclass.com</Text>
          </View>

          <Gap height={15} />

          <Button
            label="Edit Profile"
            onPress={() => navigation.navigate('EditProfilePage')}
            color="#009885"
            textColor="#FFF"
            style={{
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 8,
              alignSelf: 'flex-start',
              padding: undefined,
            }}
          />
          
          <Gap height={30} />

        </View>

        <Gap height={20} />

        <Text style={styles.sectionTitle}>Dibuat</Text>
        <Gap height={10} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <Gap height={20} />

        <View style={styles.header}>
          <Text style={styles.logoText}>CookEasy</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>

        <Gap height={10} />

        <FlatList
          data={createdRecipes}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={renderProfileHeader}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('DetailResepPage', {recipe: item})
              }>
              <Image source={item.image} style={styles.foodImage} />

              <View style={styles.cardIcons}>
                <Heart width={20} height={20} fill="#FFF" />
                <Gap height={4} />
                <Utensils width={20} height={20} fill="#FFF" />
              </View>

              <View style={styles.bottomOverlay}>
                <Text style={styles.foodTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Gap height={4} />
                <View style={styles.bottomRow}>
                  <Text style={styles.byUser}>By Mike</Text>
                  <View style={styles.ratingRow}>
                    <Text style={styles.ratingText}>4.5</Text>
                    <Gap width={3} />
                    <Star width={12} height={12} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      
      <BottomNav navigation={navigation} />

    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF9F5',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#009885',
  },
  logoutText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#FF0202',
  },
  listContent: {
    paddingBottom: 100,
  },

  profileCard: {
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#DDD',
  },
  infoColumn: {
    justifyContent: 'center',
  },
  userName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000',
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#000',
  },
  
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#009885',
    borderRadius: 13,
    margin: 8,
    flex: 1,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 100,
  },
  cardIcons: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  bottomOverlay: {
    padding: 8,
  },
  foodTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#fff',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  byUser: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 10,
    color: '#FFD700',
    fontFamily: 'Poppins-SemiBold',
  },
});