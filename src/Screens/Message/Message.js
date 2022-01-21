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
  Button,
} from 'react-native';
import Styles from '../../Utils/CommonStyle';


const Messages = () => {
    return (
  
      <View style={Styles.container}>
        <View style={Styles.icons1}>
        <Image style={Styles.msgBackIcon}
          source={require('../../assets/Icons/back.png')}></Image>
        <Text style={Styles.MsgHeader}>Adi</Text>
      </View>
  
      </View>
    );
  };
  
  export default Messages;
  