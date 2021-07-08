import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  LIGHTBLUE,
  WHITE,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_M,
  DETAILS_COLOR,
} from '../styles/styles';

export const Button = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: DETAILS_COLOR,
    padding: 20,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_M,
    color: WHITE,
  },
});
