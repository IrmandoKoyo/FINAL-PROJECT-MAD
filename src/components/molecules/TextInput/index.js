import {StyleSheet, Text, View, TextInput as Input, Image} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, icon, ...rest}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputContainer}>
        
        {icon && <Image source={icon} style={styles.icon} />} 
        
        <Input 
            placeholder={placeholder} 
            style={styles.input} 
            placeholderTextColor="#8D92A3"
            {...rest} 
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#22A5974C',
    borderRadius: 18,
    paddingHorizontal: 10,
    height: 55,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333333',
  },
});