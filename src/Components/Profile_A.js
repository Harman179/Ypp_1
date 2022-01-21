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
import Styles from '../Utils/CommonStyle';

const Profile_A = () => {
    return (
   <View style={Styles.icons1}>
   
   <Image style={Styles.ProfilePic}
     source={require('../assets/Images/Rectangle_4.png')}></Image>
     <Text style={Styles.PostsText}>24 Posts</Text>
     <Text style={Styles.FollowerText}>240 Followers</Text> 
     <Text style={Styles.FollowingText}>24 Following</Text>
   
 </View>
    );
};

 export default Profile_A;