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

// const Data = [
//   {
//     id: 1,
//     title: '',
//     Image1: require('../../assets/images/Rectangle_4.png'),
//     para: 'Adi',
//   },
//   {
//     id: 2,
//     title: ' ',
//     Icon1: require('../../assets/icons/more.png'),
//     para: ' ',
//   },
// ];

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

      {/* <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>

            <Image
              style={{
                borderRadius: 54,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginTop: 11,
                borderColor: '#7797EB',
              }}
              source={item.Image1}></Image>
            <Text>{item.para}</Text>
            <Image
              style={{
                width: 20,
                height: 20,
                marginTop: 19,
                marginLeft: 283,
              }}
              source={item.Icon1}></Image>
          </View>
        )}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
}

export default FlatlistB;
