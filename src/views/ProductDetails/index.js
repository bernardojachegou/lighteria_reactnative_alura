import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Background} from './Components/Background';
import {ItemDescription} from './Components/ItemDescription';

export const ProductDetails = ({route}) => {
  const {imagem, titulo, estudio, itemDesc, itemName, preco, id} = route.params;
  return (
    <View style={styles.container}>
      <Background />
      <ItemDescription
        imagem={imagem}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        titulo={titulo}
        preco={preco}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
