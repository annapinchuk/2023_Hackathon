import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { I18nManager } from 'react-native'; //Used for fixing RTL issues on Android
import * as Updates from 'expo-updates'; //Used for reloading the app manually.
// Need to npm install: react-navigation,react-navigation-material-bottom-tabs, expo-updates.



import HomeScreen from './HomeScreen';
import GiveMenu from './GiveMenu';
import Events from './Events';
import Profile from './Profile';
import RequestMenu from './RequestMenu';

// Calling "reloadApp" reloads the app manually.
async function reloadApp () {
  await Updates.reloadAsync();
}

//Android has a unique solution to Right-To-Left languanges (like Hebrew):
//Android inverts your screen in-order to display the languange properly.
//This solution causes every element to be displayed in reversed order which is annoying.
//This following code prevents Android from flipping the screen.
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
const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name={businessAccount? "Give Menu" : "Request Menu"} component={businessAccount? GiveMenu : RequestMenu} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;