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
  FlatList,
} from 'react-native';
import Styles from '../Utils/CommonStyle';
import LinearG from './LinearGradient';
import Like_flatlist from './Like_flatlist';

const Likes = ({ navigation }) => {
  return (
    <LinearG>
      <View style={Styles.icons1}>
        <Image style={Styles.backIcon}
          source={require('../assets/Icons/back.png')}></Image>
        <Text style={Styles.LikesText}>Likes</Text>
      </View>
      <View style={Styles.icons1}>
        <Image style={Styles.heartIcon}
          source={require('../assets/Icons/like.png')}></Image>
        <Text style={Styles.heartText}>99</Text>
      </View>
      <View style={Styles.View1}>
        <Image style={Styles.searchIcon}
          source={require('../assets/Icons/search.png')}></Image>
        <TextInput style={Styles.search} placeholder='Search'></TextInput>
      </View>
      <View>
        <Like_flatlist />
      </View>
    </LinearG>
  );
};

export default Likes;
