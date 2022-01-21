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
import F_Data from '../../Components/FakeImage';
import TabViewProfile from '../Navigators/ProfileTab';
import Profile_A from '../../Components/Profile_A';

const Profile = ({ navigation }) => {
  return (
    <View style={Styles.container}>


      <View>
        <Text style={Styles.ProfileText}>Adi_432</Text>
      </View>

   <Profile_A/>

      <View>
        <Text style={Styles.ProfileName}>Adi</Text>
      </View>

      <View>
        <Text style={Styles.ProfileDisciption}>
          when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries
        </Text>
      </View>

      <TouchableOpacity style={Styles.ProfileButton}>
        <Text style={Styles.ButtonText}>
          Edit Profile
        </Text>
      </TouchableOpacity>
        <TabViewProfile />
    </View>
  );
};

export default Profile;
