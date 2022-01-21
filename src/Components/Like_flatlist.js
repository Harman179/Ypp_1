import * as React from 'react';
import {
  View, StyleSheet, Dimensions, StatusBar, TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  Image,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Styles from '../Utils/CommonStyle';
import L_Data from './LikeData';

const Like_flatlist = () => (

  <ScrollView  nestedScrollEnabled={true}   showsVerticalScrollIndicator={false}
  >


    <View>



      <FlatList



        data={L_Data}

        renderItem={({ item }) =>

          <View style={Styles.icons1}>
            <Image style={Styles.likeprofile} source={item.Image1} />
            <View style={Styles.L_colm}>
              <Text style={Styles.LText_1}>{item.title}</Text>
              <Text style={Styles.LText_2}>{item.para}</Text>
              <Text style={Styles.LText_2}>{item.para_1}</Text>
            </View>
            <TouchableOpacity style={Styles.FollowingButton}>
              <Text style={Styles.FollowingButtonText}>
                Following
              </Text>
            </TouchableOpacity>
          </View>


        }

        keyExtractor={item => item.id}
      />

    </View>
  </ScrollView>
);

export default Like_flatlist;

