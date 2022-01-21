import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, Text, TextInput,  } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ChatsRoute from '../../Components/Chats';
import CallsRoute from '../../Components/Calls';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: ChatsRoute,
  second: CallsRoute,
});

export default function MsgTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title:'Chats' ,},
    { key: 'second', title: 'Calls', },
  ]);

  const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'#000000'}
        inactiveColor={'#000000'}
        style={{marginTop:0,backgroundColor:'#BAF6FF'}}
        indicatorStyle={styles.indicatorStyle}
        indicatorStyle={'#1CC2DA'}
        options={{
  
        
          }}
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
