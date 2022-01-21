import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import Styles from '../../Utils/CommonStyle';

const ProfileData = [
  {
    id: 1,
    title: '',
    Image1: require('../../assets/Images/Rectangle_1.png'),
  },
  {
    id: 2,
    title: ' ',
    Image1: require('../../assets/Images/Path_2.png'),
  },
  {
    id: 3,
    title: ' ',
    Image1: require('../../assets/Images/Rectangle_3.png'),
  },
  {
    id: 4,
    title: ' ',
    Image1: require('../../assets/Images/Rectangle_5.png'),
  },
  {
    id: 5,
    title: ' ',
    Image1: require('../../assets/Images/Rectangle_4.png'),
  },
];

function FlatlistA() {
  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={ProfileData}
          renderItem={({ item }) =>
            <View style={Styles.icons1}>
              <Image style={Styles.listA} source={item.Image1} />
            </View>
          }
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}
export default FlatlistA;
