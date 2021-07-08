import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_S,
  SECONDARY_COLOR,
  TEXT_COLOR,
} from '../../../../styles/styles';

export const Product = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  itemName,
  preco,
  id,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() =>
        navigation.push('ProductDetails', {
          itemDesc,
          itemName,
          imagem,
          estudio,
          titulo,
          id,
          preco,
        })
      }>
      <Image source={imagem} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{titulo}</Text>
    </TouchableOpacity>
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
