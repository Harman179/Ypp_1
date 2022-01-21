import React, {useState} from 'react';
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
  FlatList,
  Button,
} from 'react-native';

import Styles from '../../Utils/CommonStyle';
import FlatlistA from './Flatlist1';
import FlatlistB from './Flatlist2';

const Home = ({ navigation }) => {
  return (
    <View style={Styles.container}>
    <SafeAreaView>
    <ScrollView nestedScrollEnabled={false}>
        <View style={Styles.icons1}>
          {/* <Home2 height={60} width={60} /> */}
          <Image
            style={Styles.drawerIcon}
            source={require('../../assets/Icons/home_2.png')}></Image>
          <Image
            style={Styles.smsIcon}
            source={require('../../assets/Icons/sms.png')}></Image>
        </View>
        <FlatlistA />
        <FlatlistB />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
