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
import EmailPvtTabs from './EmailPvtTabs';

const EmailsPvtPg = () => {
    return (

        <View style={Styles.container}>
            <View style={Styles.icons1}>
                <Image style={Styles.msgBackIcon}
                    source={require('../../assets/Icons/back.png')}></Image>
                <Text style={Styles.EmailPvtpgHeader}>Emails from Your Private Page</Text>
                <Image
          style={Styles.moreRotateIcon}
          source={require('../../assets/Icons/more.png')}></Image>
            </View>
            <EmailPvtTabs/>
        </View>
    );
};

export default EmailsPvtPg;
