import * as React from 'react';
import { Text, View, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Likes from '../../Components/Likes';
import Search from '../../Components/Search';
import Camera from '../../Components/Camera';
import Profile from '../Profile/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          barStyle={{backgroundColor: 'white'}}
          screenOptions={{
           // tabBarActiveBackgroundColor:'skyblue',
            tabBarStyle: {backgroundColor: 'white'},
              headerShown: false,
              tabBarStyle: { position: 'absolute' },
              tabBarShowLabel: false,
              tabBarActiveTintColor:'red',
              activeTintColor: 'red',
              inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
  
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/Icons/home.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            }}
          />
  
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
           
              tabBarIcon: ({activeTintColor}) => (
                <Image
                  source={require('../../assets/Icons/search.png')}
                  style={{width: 20, height: 20,}}                />
              ),
            }}
          />
  
          <Tab.Screen
            name="Camera"
            component={Camera}
            options={{
              
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/Icons/cemra.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            }}
          />
  
          <Tab.Screen
            name="Likes"
            component={Likes}
            options={{
              
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/Icons/like.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            }}
          />
  
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/Icons/profile.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default MyTabs;
  