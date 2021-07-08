import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_S,
  SECONDARY_COLOR,
  TEXT_COLOR,
} from '../../../../styles/styles';

export const Product = ({imagem, titulo}) => {
  return (
    <View style={styles.productContainer}>
      <Image source={imagem} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    height: 168,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  title: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_S,
    color: TEXT_COLOR,
  },
  image: {
    height: 64,
  },
});
