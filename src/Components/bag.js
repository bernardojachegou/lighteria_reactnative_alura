import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {DETAILS_COLOR} from '../styles/styles';

export const Bag = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.bagImageContainer}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.bagImage}
        />
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
});
