import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  title: {
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#848486',
  },
  image: {
    height: 64,
  },
});
