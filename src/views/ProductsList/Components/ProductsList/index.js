import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from '../Header';
import {DATA} from '../../../../utils/data';
import {Product} from '../Product';

const ProductsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Product {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Header />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default ProductsList;
