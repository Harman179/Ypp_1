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
  Button,
  FlatList,
} from 'react-native';
import Styles from '../../Utils/CommonStyle';

// const Data = [
//     {
//       id: 1,
//       title: '',
//       Image1: require('../../assets/images/Rectangle_4.png'),
//     },
//     {
//       id: 2,
//       title: ' ',
//       Image1: require('../../assets/images/rectangle87_1.png'),
//     },
//     {
//         id: 3,
//         title: ' ',
//         Image1: require('../../assets/images/rectangle87_1.png'),
//       },
//       {
//         id: 4,
//         title: ' ',
//         Image1: require('../../assets/images/rectangle87_1.png'),
//       },
//       {
//         id: 5,
//         title: ' ',
//         Image1: require('../../assets/images/rectangle87_1.png'),
//       },
//   ];

function FlatlistA() {
  return (
    <View style={Styles.icons1}>
      <Image
        style={Styles.listA}
        source={require('../../assets/Images/Rectangle_1.png')}></Image>
      <Image
        style={Styles.listA}
        source={require('../../assets/Images/Path_2.png')}></Image>
      <Image
        style={Styles.listA}
        source={require('../../assets/Images/Rectangle_3.png')}></Image>
      <Image
        style={Styles.listA}
        source={require('../../assets/Images/Rectangle_5.png')}></Image>
      <Image
        style={Styles.listA}
        source={require('../../assets/Images/Rectangle_4.png')}></Image>
    </View>
  );
}

export default FlatlistA;

// const [images, setimages] = useState([
//     require('../../assets/images/Rectangle_1.png'),
//     require('../../assets/images/Path_2.png'),
//     require('../../assets/images/Rectangle_3.png'),
//     require('../../assets/images/Rectangle 31.png'),
//     require('../../assets/images/Rectangle 32.png'),
//   ]);

// <FlatList
// horizontal={true}
// showsHorizontalScrollIndicator={false}
// data={images}
// renderItem={({item, index}) => (
//   <Image
//     source={item} /* Use item to set the image source */
//     key={index} /* Important to set a key for list items,
//                but it's wrong to use indexes as keys, see below */
//     style={{
//       width: 260,
//       height: 300,
//       borderWidth: 2,
//       borderColor: '#d35647',
//       resizeMode: 'contain',
//       margin: 8,
//     }}
//   />
// )}
// />
