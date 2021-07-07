import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ProductsList from './views/ProductsList/Components/ProductsList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },
});

export default App;
