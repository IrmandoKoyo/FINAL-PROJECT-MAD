import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Star from '../../assets/star.svg';
import Heart from '../../assets/heart-outline.svg';
import Clock from '../../assets/clock.svg';
import Check from '../../assets/check.svg';
import ChevronDown from '../../assets/chevrondown.svg';
import LoveOutline from '../../assets/heart-outline.svg';
import Utensils from '../../assets/utensils.svg';

import {Gap, BottomNav} from '../../components';

const NASI_GORENG_IMAGE = require('../../assets/nasigoreng.png');
const ROTI_IMAGE = require('../../assets/roti.png');
const TAHU_IMAGE = require('../../assets/tahucrispy.png');

const RELATED_RECIPES = [
  {
    id: '1',
    title: 'Nasi goreng spesial',
    time: '30 Menit',
    image: NASI_GORENG_IMAGE,
    ingredients: [
      '2 piring nasi',
      '2 butir telur',
      '1 sdm kecap manis',
      '50g kacang polong',
    ],
    steps: [
      'Panaskan minyak di wajan.',
      'Masukkan telur, orak-arik.',
      'Masukkan nasi, bumbu, dan kecap. Aduk rata.',
      'Tambahkan kacang polong dan masak hingga matang.',
    ],
  },
  {
    id: '9',
    title: 'Roti Goreng Isi Pisang / Coklat',
    time: '45 Menit',
    image: ROTI_IMAGE,
    ingredients: [
      '10 lembar roti tawar',
      '2 buah pisang',
      '50g coklat meses',
      '1 butir telur',
      'Tepung panir',
      '1 sdm gula',
    ],
    steps: [
      'Gilass roti hingga tipis.',
      'Letakkan isian (pisang/coklat) di tengah roti.',
      'Lipat roti dan rekatkan ujungnya.',
      'Celupkan ke telur, lalu gulingkan di tepung panir.',
      'Goreng hingga coklat keemasan.',
    ],
  },
  {
    id: '10',
    title: 'Tahu Crispy Saus Pedas Manis',
    time: '20 Menit',
    image: TAHU_IMAGE,
    ingredients: [
      '1 kotak tahu putih',
      'Tepung bumbu instan',
      'Minyak untuk menggoreng',
      'Saus sambal',
      'Kecap manis',
      'Bawang putih cincang',
    ],
    steps: [
      'Potong tahu kecil-kecil.',
      'Campurkan tahu dengan tepung bumbu instan.',
      'Goreng tahu hingga crispy.',
      'Buat saus dengan mencampur saus sambal, kecap, dan bawang putih.',
      'Siramkan saus ke tahu crispy.',
    ],
  },
];

const DetailResepPage = ({route, navigation}) => {
  const {recipe} = route.params;

  const [isIngredientsExpanded, setIsIngredientsExpanded] = useState(false);
  const [isStepsExpanded, setIsStepsExpanded] = useState(false);

  const PEEK_LIMIT = 2;

  const getDisplayItems = (items, isExpanded) => {
    if (isExpanded || items.length <= PEEK_LIMIT) {
      return items;
    }
    return items.slice(0, PEEK_LIMIT);
  };

  const recipeIngredients = recipe.ingredients || [
    '2 piring nasi',
    '2 butir telur',
    '1 sdm kecap manis',
    '50g kacang polong',
  ];
  const recipeSteps = recipe.steps || [
    'Panaskan minyak.',
    'Masukkan telur dan aduk.',
    'Tambahkan nasi, kecap, dan bumbu lainnya.',
    'Masak hingga matang dan sajikan.',
  ];

  const displayIngredients = getDisplayItems(
    recipeIngredients,
    isIngredientsExpanded,
  );
  const displaySteps = getDisplayItems(recipeSteps, isStepsExpanded);

  const isIngredientsPeek =
    recipeIngredients.length > PEEK_LIMIT && !isIngredientsExpanded;
  const isStepsPeek = recipeSteps.length > PEEK_LIMIT && !isStepsExpanded;

  const relatedRecipes = RELATED_RECIPES;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.hello}>Hallo Mike!!!</Text>
          <Text style={styles.logo}>CookEasy</Text>
        </View>

        <Gap height={10} />

        <View style={styles.imageWrapper}>
          <Image source={recipe.image} style={styles.foodImage} />
          <View style={styles.gradientOverlay} />

          <View style={styles.mainIconsWrapper}>
            <TouchableOpacity style={styles.iconButton}>
              <Heart width={26} height={26} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Utensils width={26} height={26} />
            </TouchableOpacity>
          </View>

          <Text style={styles.resepTitle} numberOfLines={2}>
            {recipe.title}
          </Text>

          <View style={styles.detailInfoRow}>
            <View style={styles.infoItem}>
              <Star width={16} height={16} />
              <Text style={styles.infoText}>4.5</Text>
            </View>

            <View style={styles.infoItem}>
              <Clock width={16} height={16} />
              <Text style={styles.infoText}>{recipe.time || '30 Menit'}</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoText}>By Mike</Text>
            </View>
          </View>
        </View>

        <Gap height={15} />

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => setIsIngredientsExpanded(!isIngredientsExpanded)}
            activeOpacity={0.7}>
            <Text style={styles.cardTitle}>Bahan bahan:</Text>
            <ChevronDown
              width={26}
              height={26}
              style={{
                transform: [
                  {rotate: isIngredientsExpanded ? '0deg' : '-90deg'},
                ],
              }}
            />
          </TouchableOpacity>

          <View style={isIngredientsPeek ? styles.peekDivider : styles.divider}>
            {displayIngredients.map((item, index) => (
              <View key={index} style={styles.checkboxRow}>
                <Check width={20} height={20} />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <Gap height={15} />

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => setIsStepsExpanded(!isStepsExpanded)}
            activeOpacity={0.7}>
            <Text style={styles.cardTitle}>Cara memasak:</Text>
            <ChevronDown
              width={26}
              height={26}
              style={{
                transform: [{rotate: isStepsExpanded ? '0deg' : '-90deg'}],
              }}
            />
          </TouchableOpacity>

          <View style={isStepsPeek ? styles.peekDivider : styles.divider}>
            {displaySteps.map((step, index) => (
              <Text key={index} style={styles.instructions}>
                {index + 1}. {step}
              </Text>
            ))}
          </View>
        </View>

        <Gap height={20} />

        <Text style={styles.relatedTitle}>Resep terkait:</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.relatedScrollContainer}>
          {relatedRecipes.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.relatedCard}
              activeOpacity={0.85}
              onPress={() =>
                navigation.push('DetailResepPage', {recipe: item})
              }>
              <Image source={item.image} style={styles.relatedImg} />

              <View style={styles.topIcons}>
                <LoveOutline width={20} height={20} />
                <Utensils width={20} height={20} />
              </View>

              <View style={styles.relatedBottom}>
                <Text style={styles.relatedFoodTitle} numberOfLines={2}>
                  {item.title}
                </Text>

                <View style={styles.relatedBottomRow}>
                  <Text style={styles.relatedByUser}>By User</Text>

                  <View style={styles.relatedRatingRow}>
                    <Text style={styles.relatedRatingText}>4.5</Text>
                    <Star width={12} height={12} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Gap height={100} />
      </ScrollView>

      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

export default DetailResepPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF9F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  hello: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  logo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#009885',
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 15,
  },
  foodImage: {
    width: '100%',
    height: 260,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    height: 140,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  mainIconsWrapper: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'column',
    gap: 10,
    zIndex: 10,
  },
  iconButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 8,
    borderRadius: 40,
  },

  resepTitle: {
    position: 'absolute',
    bottom: 85,
    left: 20,
    right: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#fff',
    lineHeight: 30,
  },
  detailInfoRow: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#CDEBE2',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 14,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#27705B',
  },
  divider: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(39, 112, 91, 0.3)',
    paddingBottom: 15,
  },
  peekDivider: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(39, 112, 91, 0.3)',
    paddingBottom: 15,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
    gap: 10,
    paddingRight: 10,
  },
  listText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  instructions: {
    marginTop: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#333',
    lineHeight: 26,
    paddingRight: 10,
  },
  relatedTitle: {
    marginLeft: 15,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  relatedScrollContainer: {
    paddingRight: 15,
    paddingLeft: 0,
  },
  relatedCard: {
    marginLeft: 15,
    marginTop: 10,
    width: 150,
    backgroundColor: '#009885',
    borderRadius: 13,
    overflow: 'hidden',
  },
  relatedImg: {
    width: '100%',
    height: 90,
    resizeMode: 'cover',
  },
  topIcons: {
    position: 'absolute',
    top: 6,
    left: 6,
    flexDirection: 'column',
    gap: 5,
    borderRadius: 5,
  },
  relatedBottom: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  relatedFoodTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#fff',
    width: '100%',
  },
  relatedBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  relatedByUser: {
    fontSize: 10,
    color: '#fff',
  },
  relatedRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  relatedRatingText: {
    fontSize: 11,
    color: '#FFD700',
  },
});