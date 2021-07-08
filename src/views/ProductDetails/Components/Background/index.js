import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bag} from '../../../../Components/bag';

export const Background = () => {
  const imgSrc = require('../../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/images/flecha-esquerda.png')}
              style={styles.arrowImage}
            />
          </TouchableOpacity>
          <View style={styles.bagContainer}>
            <Bag />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 6,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowImage: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24,
  },
  bagContainer: {
    padding: 18,
  },
});
