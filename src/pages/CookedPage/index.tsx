import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {fullRecipes} from '../../data/recipes';

import Utensils from '../../assets/utensils.svg';
import Star from '../../assets/star.svg';
import LoveBar from '../../assets/lovebar.svg';
import PlusBar from '../../assets/plusbar.svg';
import UserBar from '../../assets/userbar.svg';
import HomeBar from '../../assets/homebar.svg';
import Filter from '../../assets/filter.svg';
import LoveRed from '../../assets/lovered.svg';
import Close from '../../assets/close.svg';

import {Gap, BottomNav} from '../../components';

const cookedRecipes = fullRecipes.slice(0, 5);
const numColumns = 2;

const formatData = (data, columns) => {
  const dataList = [...data];
  const numberOfFullRows = Math.floor(dataList.length / columns);
  let numberOfElementsLastRow = dataList.length - numberOfFullRows * columns;

  while (numberOfElementsLastRow !== columns && numberOfElementsLastRow !== 0) {
    dataList.push({id: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }
  return dataList;
};

const CookedPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.hello}>Hallo Mike!!!</Text>
          <Text style={styles.logoText}>CookEasy</Text>
        </View>

        <Gap height={10} />

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Cari resep anda"
            placeholderTextColor="#0000004c"
            style={styles.searchInput}
          />
          <Close width={20} height={20} />
        </View>

        <Gap height={15} />

        <View style={styles.titleRow}>
          <Text style={styles.sectionTitle}>Makanan yang sudah dimasak</Text>
          <TouchableOpacity>
            <Filter width={17} height={17} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={formatData(cookedRecipes, numColumns)}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridContainer}
          ListFooterComponent={
            <Text style={styles.footerText}>Masak lebih banyak!!</Text>
          }
          renderItem={({item}) => {
            if (item.empty === true) {
              return <View style={[styles.card, styles.cardEmpty]} />;
            }

            return (
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.85}
                onPress={() =>
                  navigation.navigate('DetailResepPage', {recipe: item})
                }>
                <Image source={item.image} style={styles.foodImage} />

                <View style={styles.topIcons}>
                  <TouchableOpacity style={styles.iconButton}>
                    <LoveRed width={46} height={46} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconButton}>
                    <Utensils width={26} height={26} /> 
                  </TouchableOpacity>
                </View>

                <View style={styles.bottomOverlay}>
                  <Text style={styles.foodTitle} numberOfLines={1}>
                    {item.title}
                  </Text>

                  <View style={styles.bottomRow}>
                    <Text style={styles.byUser}>By User</Text>
                    <View style={styles.ratingRow}>
                      <Text style={styles.ratingText}>4.5</Text>
                      <Star width={14} height={14} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      
      <BottomNav navigation={navigation} />

    </SafeAreaView>
  );
};

export default CookedPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF9F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#EEF9F5',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  hello: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
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
    fontFamily: 'Poppins-Regular',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  sectionTitle: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  gridContainer: {
    paddingBottom: 90,
    marginTop: 5,
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
  cardEmpty: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  foodImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },

  topIcons: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'column',
    gap: 8,
  },
  iconButton: {
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  foodTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#fff',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  byUser: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingText: {
    fontSize: 11,
    color: '#FFD700',
    fontFamily: 'Poppins-SemiBold',
  },

  footerText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
    marginBottom: 10,
  },
});