import * as React from 'react';
import Styles from './src/Utils/CommonStyle';
import StackNav from './src/Screens/Navigators/Stack';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home/Home';
import Profile from './src/Screens/Profile/Profile';
import MyTabs from './src/Screens/Navigators/NavTab';
import Like_flatlist from './src/Components/Like_flatlist';


function App() {
  return (
    <View style={Styles.container}>
    
      {/* <Home /> */}
      <MyTabs/>
      
    {/* <TabViewProfile/> */}
    </View>
    
  );
}

export default App;