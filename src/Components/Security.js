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

const SecurityData = [
    {
        id: 1,
        title: 'Security and login emails from your private page in the last 14 days will appear here',
    },
];

const Security = () => (

    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>

        <FlatList
            data={SecurityData}
            renderItem={({ item }) =>
                <View>
                    <Text style={Styles.SecurityText}>{item.title}</Text>
                </View>
            }
            keyExtractor={item => item.id}
        />
    </ScrollView>
);
export default Security;