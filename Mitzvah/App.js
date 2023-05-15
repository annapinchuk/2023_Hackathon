import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { I18nManager } from 'react-native'; //Used for fixing RTL issues on Android
import * as Updates from 'expo-updates'; //Used for reloading the app manually.
// Need to npm install: react-navigation,react-navigation-material-bottom-tabs, expo-updates, react-native-maps, react-native-permissions, react-native-geolocation-service.



import HomeScreen from './UI/Home/HomeScreen';
import GiveMenu from './Requests';
import Events from './Events';
import Profile from './Profile';
import RequestMenu from './RequestMenu';

// Calling "reloadApp" reloads the app manually.
async function reloadApp () {
  await Updates.reloadAsync();
}

//Android has a unique solution to Right-To-Left languanges (like Hebrew):
//It inverts your screen in-order to display the languange properly.
//This causes every element to be displayed in reversed order.
//The following code prevents the Android OS from doing this.
if(I18nManager.isRTL) {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
  if(Platform.OS === "android") {
    reloadApp() //Need to reload the app in order for the fix to work.
  }
}

let businessAccount = true;

const Tab = createMaterialBottomTabNavigator();

//Need to implement a login screen.
//Read Material-bottom-tabs docs 

const App = () => (
  <NavigationContainer>
    <Tab.Navigator 
    activeColor='#392F5A'
    barStyle={{ backgroundColor: '#BDEDE0' }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name={businessAccount? "Requests" : "Request Menu"} component={businessAccount? GiveMenu : RequestMenu} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;