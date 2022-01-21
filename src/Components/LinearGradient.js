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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Styles from '../Utils/CommonStyle';



const LinearG = ({ children, isScrollable, title, noPadding, navigation }) => {
  return (
    
      <LinearGradient colors={['#87FFFF', '#FFFFFF']} style={{ width: '100%', height: 740, padding: 20, alignSelf: "center" }}>
          {children}

   
      </LinearGradient>
  )
}

export default LinearG;
