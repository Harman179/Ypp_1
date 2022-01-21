import * as React from 'react';
import {
    View, StyleSheet, Dimensions, StatusBar, TextInput, Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
    Button, Image,
} from 'react-native';
import Styles from '../Utils/CommonStyle';
import ChatsData from './ChatsData';

const ChatsRoute = () => (
    
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            <View style={Styles.View1}>
        <Image style={Styles.searchIcon}
          source={require('../assets/Icons/search.png')}></Image>
        <TextInput style={Styles.search} placeholder='Search'></TextInput>
      </View>

        <FlatList
            data={ChatsData}
            renderItem={({ item }) =>
                <View style={Styles.icons1}>
                    <Image style={Styles.chatsProfile} source={item.Image1} />
                    <View style={Styles.L_colm}>
                        <Text style={Styles.ChatsText_1}>{item.title}</Text>
                        <Text style={Styles.LText_2}>{item.para}</Text>
                    </View>
                    <Text style={Styles.TimeText}>
                        1:20pm
                    </Text>
                </View>


            }

            keyExtractor={item => item.id}
        />
    </ScrollView>



);

export default ChatsRoute;