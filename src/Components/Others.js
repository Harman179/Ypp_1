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

const OtherData = [
    {
        id: 1,
        title: 'This is Others Screen',
    },
];

const Others = () => (

    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>

        <FlatList
            data={OtherData}
            renderItem={({ item }) =>
                <View>
                    <Text style={Styles.SecurityText}>{item.title}</Text>
                </View>
            }
            keyExtractor={item => item.id}
        />
    </ScrollView>
);
export default Others;