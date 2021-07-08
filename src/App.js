import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ProductsList from './views/ProductsList/Components/ProductsList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PRIMARY_COLOR} from './styles/styles';
import {ProductDetails} from './views/ProductDetails';
import {Checkout} from './views/Checkout';
import Provider from './provider';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              cardStyle: {backgroundColor: PRIMARY_COLOR},
            }}
            initialRouteName="ProductsList">
            <Stack.Screen
              name="ProductsList"
              component={ProductsList}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
});

export default App;
