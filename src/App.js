import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lighteria</Text>
        <View style={styles.bagImageContainer}>
          <Image
            source={require('./assets/images/icone-sacola.png')}
            style={styles.bagImage}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.breakLine} />
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>
            Categorias
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 24
  },
  bagImageContainer: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  title: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  bagImage: {
    height: 30,
    width: 30
  },
  descriptionContainer: {
    paddingHorizontal: 24,
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46
  },
  descriptionText: {
    padding: 34,
    backgroundColor: '#F4F0F4',
    fontSize: 16
  }
})

export default App;