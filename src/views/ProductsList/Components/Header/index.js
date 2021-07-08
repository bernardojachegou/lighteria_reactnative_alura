import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_SIZE_M,
  FONT_SIZE_XXL,
  TEXT_COLOR,
  PRIMARY_COLOR,
  FONT_FAMILY_SEMIBOLD,
} from '../../../../styles/styles';
import {Bag} from '../../../../Components/bag';

const Header = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lighteria</Text>
        <Bag />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.breakLine} />
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 6,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XXL,
    color: TEXT_COLOR,
  },
  descriptionContainer: {
    paddingHorizontal: 6,
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: TEXT_COLOR,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  descriptionText: {
    padding: 34,
    backgroundColor: PRIMARY_COLOR,
    fontSize: FONT_SIZE_M,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
});

export default Header;
