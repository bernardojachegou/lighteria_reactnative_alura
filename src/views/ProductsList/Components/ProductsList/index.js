import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '../Header';
import {DATA} from '../../../../utils/data';
import {Product} from '../Product';

const ProductsList = () => {
  return (
    <View>
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

export default ProductsList;
