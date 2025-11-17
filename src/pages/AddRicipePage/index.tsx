import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import ChevronDown from '../../assets/chevrondown.svg';
import AddCircle from '../../assets/addcircle.svg';
import Photo from '../../assets/photo.svg';
import Close from '../../assets/close.svg';

import {Gap, Button, BottomNav} from '../../components';

const dummyIngredients = [
  'Nasi putih 1 piring',
  'Garam – 2 gr',
  'Minyak goreng 15 ml',
  'Telur 2 butir',
  'Bawang Merah 2 siung',
  'Bawang Putih 1 siung',
];
const dummySteps = [
  'Panaskan minyak goreng 15 ml di wajan.',
  'Tumis bawang merah dan bawang putih hingga harum.',
  'Masukkan nasi.',
  'Aduk rata dan sajikan.',
];
const CATEGORIES = ['Goreng', 'Tumis', 'Cah', 'Rebus'];

const PEEK_LIMIT_INGREDIENTS = 5;
const PEEK_LIMIT_STEPS = 3;

const TagInputItem = ({text, onRemove}) => (
  <View style={tagStyles.tagContainer}>
    <Text style={tagStyles.tagText}>{text}</Text>
    <TouchableOpacity onPress={onRemove} style={tagStyles.removeButton}>
      <Close width={10} height={10} style={tagStyles.closeIconStyle} />
    </TouchableOpacity>
  </View>
);

const StepItem = ({text, index, onRemove}) => (
  <View style={tagStyles.stepContainer}>
    <Text style={tagStyles.stepText}>{`${index + 1}. ${text}`}</Text>
    <TouchableOpacity onPress={onRemove} style={tagStyles.removeButton}>
      <Close width={10} height={10} style={tagStyles.closeIconStyle} />
    </TouchableOpacity>
  </View>
);

const AddRecipePage = ({navigation}) => {
  const [ingredients, setIngredients] = useState(dummyIngredients);
  const [steps, setSteps] = useState(dummySteps);

  const [newIngredient, setNewIngredient] = useState('');
  const [newStep, setNewStep] = useState('');

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isIngredientsExpanded, setIsIngredientsExpanded] = useState(false);
  const [isStepsExpanded, setIsStepsExpanded] = useState(false);

  const handleAddIngredient = () => {
    if (newIngredient.trim().length > 0) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient('');
    }
  };

  const handleAddStep = () => {
    if (newStep.trim().length > 0) {
      setSteps([...steps, newStep.trim()]);
      setNewStep('');
    }
  };

  const handlePublish = () => {
    alert('Resep berhasil dipublikasikan!');
  };

  const displayIngredients =
    isIngredientsExpanded || ingredients.length <= PEEK_LIMIT_INGREDIENTS
      ? ingredients
      : ingredients.slice(0, PEEK_LIMIT_INGREDIENTS);

  const displaySteps =
    isStepsExpanded || steps.length <= PEEK_LIMIT_STEPS
      ? steps
      : steps.slice(0, PEEK_LIMIT_STEPS);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.header}>
            <Text style={styles.hello}>Hallo Mike!!!</Text>
            <Text style={styles.logo}>CookEasy</Text>
          </View>

          <Gap height={10} />
          <Text style={styles.sectionTitle}>Tambahkan resep makanan Anda!</Text>
          <Gap height={15} />

          <View style={styles.imageInputCard}>
            <Photo width={64} height={64} style={styles.imageIcon} />
            <Text style={styles.imageInputText}>Upload Gambar Makanan Anda</Text>
          </View>

          <Gap height={10} />

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Judul resep makanan anda"
              placeholderTextColor="#6e6e6e"
              style={styles.textInput}
            />
          </View>

          <Gap height={10} />

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Deskripsi...."
              placeholderTextColor="#6e6e6e"
              style={styles.textInput}
            />
          </View>

          <Gap height={10} />

          <View style={styles.categoryWrapper}>
            <TouchableOpacity
              style={styles.categoryInputContainer}
              onPress={() => setIsCategoryOpen(!isCategoryOpen)}
              activeOpacity={0.8}>
              <Text
                style={[
                  styles.categoryInput,
                  selectedCategory
                    ? styles.categorySelected
                    : styles.categoryPlaceholder,
                ]}>
                {selectedCategory || 'Kategori resep makaan anda..'}
              </Text>
              <ChevronDown
                width={24}
                height={24}
                style={[
                  styles.categoryIcon,
                  isCategoryOpen && styles.chevronRotated,
                ]}
              />
            </TouchableOpacity>

            {isCategoryOpen && (
              <View style={styles.dropdownContainer}>
                {CATEGORIES.map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedCategory(category);
                      setIsCategoryOpen(false);
                    }}>
                    <Text style={styles.dropdownText}>{category}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <Gap height={20} />

          <View style={styles.listCard}>
            <TouchableOpacity
              style={styles.listCardHeader}
              onPress={() => setIsIngredientsExpanded(!isIngredientsExpanded)}
              activeOpacity={0.7}
              disabled={ingredients.length <= PEEK_LIMIT_INGREDIENTS}>
              <Text style={styles.listTitle}>Tambahkan Bahan bahan:</Text>
              <ChevronDown
                width={24}
                height={24}
                style={[
                  styles.listChevron,
                  isIngredientsExpanded && styles.chevronRotated,
                ]}
              />
            </TouchableOpacity>

            <View style={styles.addSection}>
              <TextInput
                placeholder="Tambahkan bahan..."
                placeholderTextColor="#8F8F8F"
                style={styles.addInput}
                value={newIngredient}
                onChangeText={setNewIngredient}
                onSubmitEditing={handleAddIngredient}
              />
              <TouchableOpacity onPress={handleAddIngredient}>
                <AddCircle width={15} height={15} style={styles.addIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.tagListContainer}>
              {displayIngredients.map((item, index) => (
                <TagInputItem
                  key={index}
                  text={item}
                  onRemove={() =>
                    setIngredients(ingredients.filter((_, i) => i !== index))
                  }
                />
              ))}
            </View>
          </View>

          <Gap height={10} />

          <View style={styles.listCard}>
            <TouchableOpacity
              style={styles.listCardHeader}
              onPress={() => setIsStepsExpanded(!isStepsExpanded)}
              activeOpacity={0.7}
              disabled={steps.length <= PEEK_LIMIT_STEPS}>
              <Text style={styles.listTitle}>Tambahkan cara memasak:</Text>
              <ChevronDown
                width={24}
                height={24}
                style={[
                  styles.listChevron,
                  isStepsExpanded && styles.chevronRotated,
                ]}
              />
            </TouchableOpacity>

            <View style={styles.addSection}>
              <TextInput
                placeholder="Tambahkan langkah..."
                placeholderTextColor="#8F8F8F"
                style={styles.addInput}
                value={newStep}
                onChangeText={setNewStep}
                onSubmitEditing={handleAddStep}
              />
              <TouchableOpacity onPress={handleAddStep}>
                <AddCircle width={15} height={15} style={styles.addIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.stepListContainer}>
              {displaySteps.map((item, index) => (
                <StepItem
                  key={index}
                  index={index}
                  text={item}
                  onRemove={() => setSteps(steps.filter((_, i) => i !== index))}
                />
              ))}
            </View>
          </View>

          <Gap height={20} />

          <Button label="PUBLISH SEKARANG" onPress={handlePublish} />

          <Gap height={90} />
        </ScrollView>
      </KeyboardAvoidingView>

      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

export default AddRecipePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF9F5',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 19,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
  },
  hello: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  logo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#009885',
  },

  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000',
    marginLeft: 1,
  },

  imageInputCard: {
    backgroundColor: '#FEFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 18,
    height: 158,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    color: '#79747E',
  },
  imageInputText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#8D8D8D',
    marginTop: 10,
  },

  textInputContainer: {
    backgroundColor: '#FEFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 18,
    height: 64,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },

  categoryWrapper: {
    zIndex: 10,
  },
  categoryInputContainer: {
    backgroundColor: '#FEFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 18,
    height: 41,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  categoryPlaceholder: {
    color: '#6e6e6e',
  },
  categorySelected: {
    color: '#000',
  },
  categoryIcon: {
    color: '#000',
  },
  chevronRotated: {
    transform: [{rotate: '180deg'}],
  },
  dropdownContainer: {
    backgroundColor: '#FEFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 10,
    marginTop: 4,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF9F5',
  },
  dropdownText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },

  listCard: {
    backgroundColor: '#FEFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 8,
    padding: 15,
    width: '100%',
    minHeight: 172,
    zIndex: 1,
  },
  listCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  listTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1E1E1E',
  },
  listChevron: {
    position: 'absolute',
    right: 6,
    top: 1,
    color: '#000',
  },

  addSection: {
    backgroundColor: '#F3FCFC',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 8,
    marginTop: 10,
    marginBottom: 10,
    height: 32,
  },
  addInput: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#1E1E1E',
    paddingVertical: 0,
    height: 30,
  },
  addIcon: {
    color: '#009885',
    padding: 4,
  },

  tagListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  stepListContainer: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 10,
  },
});

const tagStyles = StyleSheet.create({
  tagContainer: {
    backgroundColor: '#DADADA',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 10,
    paddingRight: 4,
    gap: 4,
  },
  tagText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000000',
  },
  stepContainer: {
    backgroundColor: '#DADADA',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 14,
    paddingRight: 4,
    width: '100%',
  },
  stepText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000000',
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#00000023',
    borderRadius: 50,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIconStyle: {
    color: '#FFFFFF',
    width: 10,
    height: 10,
  },
});