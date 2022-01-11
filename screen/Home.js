import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import CategoryItems from '../screen/components/CategoryItems';
import PopulerItems from '../screen/components/PopulerItems';

const Home = ({ navigation }) => {
  const [data, setdata] = useState(categoriesData);

  const filterData = (event) => {
    const filDAta = categoriesData.filter((item) => {
      if (item.title.toLowerCase().includes(event.toLowerCase())) {
        return item;
      }
    });
    setdata(filDAta);
  };

  return (
    <View style={styles.body}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* header */}
        <SafeAreaView>
          <View style={styles.container}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImg}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>
        {/* title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.subTitle}>food</Text>
          <Text style={styles.title}>delivery</Text>
        </View>
        {/* search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <TextInput
            onChangeText={filterData}
            placeholder="Search"
            style={styles.search}
            underlineColorAndroid={colors.textLight}
          />
        </View>
        {/* category */}
        <View style={styles.catWrapper}>
          <Text style={styles.catTitle}>Categories</Text>
          <View style={styles.catListWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={({ item }) => <CategoryItems data={item} />}
            />
          </View>
        </View>
        {/* popular */}
        <View style={styles.populerWrapper}>
          <Text style={styles.populerTitle}>Populer</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={popularData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('details', { Item: item })}>
                <PopulerItems data={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
    textTransform: 'capitalize',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    textTransform: 'capitalize',
    marginTop: 5,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: colors.textLight,
    fontFamily: 'Montserrat-Regular',
  },
  catWrapper: {
    marginTop: 30,
  },
  catTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  catListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  populerWrapper: {
    paddingHorizontal: 20,
  },
  populerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});
