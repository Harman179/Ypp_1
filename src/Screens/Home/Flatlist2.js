import React, {useState} from 'react';
import {
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

function FlatlistB() {
  return (
    <View>
      <View style={Styles.icons1}>
        <View>
          <Image
            style={Styles.listB}
            source={require('../../assets/Images/Rectangle_4.png')}></Image>
        </View>

        <View>
          <Text style={Styles.NameText}>Adi</Text>
        </View>

        <Image
          style={Styles.moreIcon}
          source={require('../../assets/Icons/more.png')}></Image>
      </View>

      <View>
        <Image
          style={Styles.recImage}
          source={require('../../assets/Images/rectangle87_1.png')}></Image>
      </View>

      <View style={Styles.icons1}>
        <Image
          style={Styles.C_Icon}
          source={require('../../assets/Icons/like.png')}></Image>

        <Image
          style={Styles.C_Icon}
          source={require('../../assets/Icons/comment.png')}></Image>

        <Image
          style={Styles.C_Icon}
          source={require('../../assets/Icons/share.png')}></Image>
      </View>

      <View style={Styles.likesText}>
        <Text>30likes</Text>
      </View>

      <View style={Styles.icons1}>
        <Text style={Styles.NameText1}>Adi</Text>

        <Image
          style={Styles.Emoji_Icon}
          source={require('../../assets/Icons/emoji.png')}></Image>

        <Image
          style={Styles.Emoji_Icon}
          source={require('../../assets/Icons/emoji.png')}></Image>

        <Image
          style={Styles.Emoji_Icon}
          source={require('../../assets/Icons/emoji.png')}></Image>
      </View>
      <View style={Styles.icons1}>
        <Text style={Styles.NameText2}>20min ago</Text>
      </View>
    </View>
  );
}

export default FlatlistB;
