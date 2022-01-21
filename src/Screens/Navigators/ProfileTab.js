import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FirstRoute from '../../Components/Feed';
import SecondRoute from '../../Components/Play';

// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewProfile() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title:'Feed' ,},
    { key: 'second', title: 'Play', },
  ]);

  const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'blue'}
        inactiveColor={'grey'}
        style={{marginTop:0,backgroundColor:'#BAF6FF'}}
        indicatorStyle={{ backgroundColor: '#1CC2DA' }}
        options={{
            
            tabBarIcon: () => (
              <Image
                source={require('../../assets/Icons/help.png')}
                style={{width: 20, height: 20}}
              />
            ),
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
});
