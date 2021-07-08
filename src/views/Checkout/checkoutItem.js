import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  DETAILS_COLOR,
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_M,
  FONT_SIZE_S,
  FONT_SIZE_XS,
  SECONDARY_COLOR,
} from '../../styles/styles';
import {moneyFormat} from '../../utils/utils';

export const CheckoutItem = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  itemName,
  preco,
  total,
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={imagem} style={styles.image} />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.firstText}>{itemName}</Text>
        <Text style={styles.secondText}>{titulo}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{moneyFormat(preco * total)}</Text>
        <Text style={styles.totalText}>Qtd: {total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: DETAILS_COLOR,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  imageContainer: {
    flex: 20,
    backgroundColor: SECONDARY_COLOR,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 50,
  },
  descContainer: {
    flex: 45,
    padding: 18,
    justifyContent: 'center',
  },
  firstText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_M,
  },
  secondText: {
    fontFamily: FONT_FAMILY_LIGHT,
    fontSize: FONT_SIZE_S,
  },
  priceContainer: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  totalText: {
    textAlign: 'center',
    padding: 4,
    fontSize: FONT_SIZE_XS,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  priceText: {
    textAlign: 'center',
    padding: 4,
    fontSize: FONT_SIZE_XS,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
