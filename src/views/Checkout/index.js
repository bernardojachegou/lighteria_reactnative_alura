import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '../../Components/button';
import {DataContext} from '../../provider';
import {
  DETAILS_COLOR,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_M,
  FONT_SIZE_S,
  FONT_SIZE_XXL,
} from '../../styles/styles';
import {moneyFormat} from '../../utils/utils';
import {CheckoutItem} from './checkoutItem';

export const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);
  const navigation = useNavigation();

  const totalValue = itensCheckout.reduce(
    (total, added) => total + added.total * added.preco,
    0,
  );
  const Title = ({children}) => <Text style={styles.title}>{children}</Text>;
  const Total = ({children}) => <Text style={styles.total}>{children}</Text>;
  return (
    <View style={styles.container}>
      <Title>Checkout</Title>
      {itensCheckout.map(item => (
        <CheckoutItem {...item} />
      ))}
      <Total>{moneyFormat(totalValue)}</Total>
      <Button titulo={'Finalizar Compra'} />
      <TouchableOpacity onPress={() => navigation.push('ProductsList')}>
        <Text style={styles.continueShopping}>Continue Comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  total: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_M,
    paddingVertical: 24,
  },
  title: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_XXL,
    marginBottom: 8,
  },
  continueShopping: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_S,
    color: DETAILS_COLOR,
    marginTop: 20,
    textAlign: 'center',
  },
});
