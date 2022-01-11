import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

const CategoryItems = ({ data }) => {
  return (
    <View
      style={[
        styles.catItemWrapper,
        {
          backgroundColor: data.selected ? colors.primary : colors.white,
          marginLeft: data.id == 1 ? 20 : 0,
        },
      ]}>
      <Image source={data.image} style={styles.catItemImg} />
      <Text style={styles.catItemTitle}>{data.title}</Text>
      <View
        style={[
          styles.catWrapperIcon,
          {
            backgroundColor: data.selected ? colors.white : colors.secondary,
          },
        ]}>
        <Feather name="chevron-right" size={8} style={styles.catItemIcon} />
      </View>
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({
  catItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: '#F5CA48',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  catItemImg: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  catItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Meduim',
    fontSize: 14,
    marginTop: 10,
  },
  catWrapperIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    borderRadius: 26,
    marginTop: 20,
    marginBottom: 20,
  },
  catItemIcon: {
    alignSelf: 'center',
  },
});
