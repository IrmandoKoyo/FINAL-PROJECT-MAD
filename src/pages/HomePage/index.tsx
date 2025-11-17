import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';

import {Gap, BottomNav} from '../../components';

import UtensilsBar from '../../assets/utensilsbar.svg';
import Utensils from '../../assets/utensils.svg';
import Star from '../../assets/star.svg';
import LoveBar from '../../assets/lovebar.svg';
import PlusBar from '../../assets/plusbar.svg';
import UserBar from '../../assets/userbar.svg';
import HomeBar from '../../assets/homebar.svg';
import Filter from '../../assets/filter.svg';
import LoveOutline from '../../assets/heart-outline.svg';
import Close from '../../assets/close.svg';

import {fullRecipes} from '../../data/recipes';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>Hallo Mike!!!</Text>
        <Text style={styles.logoText}>CookEasy</Text>
      </View>
      <Gap height={20} />

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Cari resep anda"
          placeholderTextColor="#0000004c"
          style={styles.searchInput}
        />
        <Close width={20} height={20} />
      </View>
      <Gap height={20} />

      <View style={styles.categories}>
        {['Goreng', 'Tumis', 'Cah', 'Rebus'].map((item, i) => (
          <TouchableOpacity key={i} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Gap height={20} />

      <View style={styles.titleRow}>
        <Text style={styles.sectionTitle}>Berbagai macam resep...</Text>
        <TouchableOpacity>
          <Filter width={17} height={17} />
        </TouchableOpacity>
      </View>
      <Gap height={10} />

      <FlatList
        data={fullRecipes}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate('DetailResepPage', {recipe: item})
            }>
            <Image source={item.image} style={styles.foodImage} />

            <View style={styles.topIcons}>
              <LoveOutline width={20} height={20} fill="#FFF" />
              <Gap height={4} />
              <Utensils width={20} height={20} fill="#FFF" />
            </View>

            <View style={styles.bottomOverlay}>
              <Text style={styles.foodTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Gap height={4} />
              <View style={styles.bottomRow}>
                <Text style={styles.byUser}>By User</Text>
                <View style={styles.ratingRow}>
                  <Text style={styles.ratingText}>4.5</Text>
                  <Gap width={3} />
                  <Star width={14} height={14} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <BottomNav navigation={navigation} />

    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF9F5',
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hello: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#000',
  },
  logoText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#009885',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 18,
    paddingHorizontal: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
  categoryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 9,
    width: 80,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#009885',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },

  gridContainer: {
    paddingBottom: 90,
  },

  card: {
    backgroundColor: '#009885',
    borderRadius: 13,
    margin: 6,
    flex: 1,
    overflow: 'hidden',
    elevation: 9,
    borderWidth: 1,
    borderColor: '#a8a8a8ff',
  },

  foodImage: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },

  topIcons: {
    position: 'absolute',
    top: 6,
    left: 6,
  },

  bottomOverlay: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },

  foodTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#FFF',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  byUser: {
    fontSize: 10,
    color: '#FFF',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 11,
    color: '#FFD700',
  },
});