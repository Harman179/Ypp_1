import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, Text, TextInput,  } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Security from '../../Components/Security';
import Others from '../../Components/Others';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: Security,
  second: Others,
});

export default function EmailPvtTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title:'Security' ,},
    { key: 'second', title: 'Others', },
  ]);

  const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'#000000'}
        inactiveColor={'#000000'}
        style={{fontWeight: 'bold',Color:'black',marginTop:0,backgroundColor:'#FFFFFF',}}
        indicatorStyle={{ backgroundColor: '#1CC2DA' }}
    />
); 
  return (
    <TabView
      navigationState={{ index, routes, }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  indicatorStyle: {
    color:'red',
  },
});
