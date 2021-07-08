import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button} from '../../../../Components/button';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_L,
  FONT_SIZE_M,
  FONT_SIZE_S,
  FONT_SIZE_XL,
  SECONDARY_COLOR,
} from '../../../../styles/styles';
import {moneyFormat} from '../../../../utils/utils';

export const ItemDescription = ({
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
    <View style={styles.itemContainer}>
      <View style={styles.itemPosition}>
        <View style={styles.item}>
          <View style={styles.textPosition}>
            <View>
              <Text style={styles.firstText}>{estudio} </Text>
              <Text style={styles.secondText}>{itemName} </Text>
              <Text style={styles.ThirdText}>{titulo} </Text>
            </View>
            <Image source={imagem} style={styles.productImage} />
          </View>
          <Text>{itemDesc}</Text>
          <View style={styles.footer}>
            <Text style={styles.moneyFormat}>{moneyFormat(preco)}</Text>
            <Button
              titulo={'COMPRAR'}
              width={'100%'}
              onPress={() => navigation.push('Checkout')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -64,
  },
  itemPosition: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  textPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 30,
    height: 72,
  },
  firstText: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_M,
    marginBottom: 4,
  },
  secondText: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XL,
    marginBottom: 4,
  },
  ThirdText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_S,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  moneyFormat: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_L,
  },
});
