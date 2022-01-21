// import * as React from 'react';
// import { View, Text, Button, } from 'react-native';
// import Styles from '../../Utils/CommonStyle';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import Notifications from '../../Components/Notifications';
// import PrivacySafety from '../../Components/PrivacySafety';
// import Account from '../../Components/Account';
// import Help from '../../Components/Help';


// const Drawer = createDrawerNavigator();

// // function CustomDrawerContent(props) {
// //     return (
// //       <SafeAreaView>
  
// //   <View style={Styles.icons1}>
// //             <Image
// //               style={Styles.ProfilePic}
// //               source={require('../../assets/Images/Rectangle_4.png')}></Image>
  
// //             <View>
// //               <Text style={Styles.FollowerText}>Adi Followers</Text>
// //             </View>
// //   </View>
  
// //       <DrawerContentScrollView {...props}>
// //         <DrawerItemList {...props} />
       
// //         <DrawerItem
// //           label="Notifications"
// //           onPress={() => {
// //             props.navigation.navigate('Notifications');
// //           }}
// //         />
// //         <DrawerItem
// //           label="Privacy And Safety"
// //           onPress={() => {
// //             props.navigation.navigate('PrivacySafety');
// //           }}
// //         />
// //         <DrawerItem
// //           label="Account"
// //           onPress={() => {
// //             props.navigation.navigate('Account');
// //           }}
// //         />
// //           <DrawerItem
// //           label="Help"
// //           onPress={() => {
// //             props.navigation.navigate('Help');
// //           }}
// //         />
// //       </DrawerContentScrollView>
// //       </SafeAreaView>
// //     );
// //   }
  
//   function DrawerNav() {
//     return (
//         <NavigationContainer>
//       <Drawer.Navigator>
     

//         <Drawer.Screen name="Account" component={Account} />
//         <Drawer.Screen name="Help" component={Help} />

       
//       </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   };
  
// //   const Stack = createNativeStackNavigator();
  
// //   function MyDrawer() {
// //     return (
// //       <NavigationContainer>
// //         <Stack.Navigator initialRouteName="Home">
// //           {/* <Stack.Screen name="Home" component={Home} /> */}
         
// //         <Stack.Screen
// //           name="MyDrawer"
// //           component={MyDrawer}
// //           options={{
// //             headerShown: false,
  
// //             // headerLeft: () => (
// //             //   <Button onPress={() => alert('Home')} title="Back" />
// //             // ),
// //           }}
// //         />
         
// //         </Stack.Navigator>
// //       </NavigationContainer>
// //     );
// //   }
  
// export default DrawerNav;
  
