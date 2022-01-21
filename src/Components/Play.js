import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
    Button, Image, } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Styles from '../Utils/CommonStyle';
import F_Data from './FakeImage';

const SecondRoute = () => (

    <View style={Styles.scene}>

        <FlatList

            data={F_Data}
            numColumns={3}

            renderItem={({ item }) =>
                <View >
                    <View style={{ backgroundColor: "#ff4081", }}>
                        <Image style={Styles.photo} source={item.Image1} />
                    </View>

                </View>
            }

            keyExtractor={item => item.id}
        />


    </View>
);

export default SecondRoute;