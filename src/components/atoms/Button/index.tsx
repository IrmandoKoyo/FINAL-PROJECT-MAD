import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets';

const Button = ({
  label,
  color = '#009885',
  textColor = '#ffffffff',
  type,
  icon,
  onPress,
  style,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.button(color), style]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.text(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 100,
  }),
  text: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});