import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DETAILS_COLOR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_XS,
} from '../styles/styles';
import {DataContext} from '../provider';

export const Bag = () => {
  const navigation = useNavigation();
  const {itensCheckout} = useContext(DataContext);
  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.bagImageContainer}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.bagImage}
        />
        {itensCheckout.length > 0 ? (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityNumber}>
              {itensCheckout.reduce((total, added) => total + added.total, 0)}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bagImageContainer: {
    backgroundColor: DETAILS_COLOR,
    padding: 18,
    borderRadius: 30,
  },
  bagImage: {
    height: 30,
    width: 30,
  },
  quantityContainer: {
    backgroundColor: 'red',
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },
  quantityNumber: {
    textAlign: 'center',
    padding: 4,
    fontSize: FONT_SIZE_XS,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: '#fff',
  },
});
