import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';

const PopulerItems = ({ data }) => {
  return (
    <View style={[styles.cardBody, { marginTop: data.id == 1 ? 10 : 20 }]}>
      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <View style={styles.cardWrapperTopTitle}>
            <MaterialCommunityIcons
              name="crown"
              size={12}
              color={colors.primary}
            />
            <Text style={styles.cardTopTitle}>top of the week</Text>
          </View>
          <View style={styles.cardBottmTitleWrap}>
            <Text style={styles.cardBottmTitle}>{data.title}</Text>
            <Text style={styles.cardBottmSubTitle}>Weight {data.weight}</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardBadge}>
            <Text>+</Text>
          </View>
          <View style={styles.cardFooterRate}>
            <MaterialCommunityIcons
              name="star"
              size={10}
              color={colors.textDark}
            />
            <Text style={styles.cardRate}>{data.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainerImg}>
        <Image
          source={data.image}
          resizeMode="contain"
          style={styles.cardImage}
        />
      </View>
    </View>
  );
};

export default PopulerItems;

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 25,
    paddingTop: 20,
  },
  cardWrapper: {
    paddingLeft: 20,
  },
  cardWrapperTopTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTopTitle: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  cardBottmTitleWrap: {
    marginTop: 20,
  },
  cardBottmTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  cardBottmSubTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  cardBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  cardFooterRate: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  cardRate: {
    marginLeft: 5,
    fontSize: 12,
    color: colors.textDark,
    fontFamily: 'Montserrat-SemiBold',
  },
  cardContainerImg: {
    marginLeft: 40,
  },
  cardImage: {
    width: 210,
    height: 125,
  },
});
