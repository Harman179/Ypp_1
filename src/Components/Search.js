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
import Styles from '../Utils/CommonStyle';
import Messages from '../Screens/Message/Message';
import EmailsPvtPg from '../Screens/Emails_from_PrivatePg/Emails_from_PvtPg';

const Search = ({ navigation }) => {
  return (
    <View style={Styles.container}>
    
<EmailsPvtPg/>
    </View>
  );
};

export default Search;
