//==================Imports/Config==================//

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Profile from './src/components/Profile.js'
import Dashboard from './src/components/Dashboard.js'
import Home from './src/components/Home.js'
import Login from './src/components/Login.js'
import SignUp from './src/components/SignUp.js'


import * as firebase from "firebase"

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDNx-TD0lv8jRRjaZZ3IIRGHFlsM5bfdi8",
  authDomain: "phreelance-34ba2.firebaseapp.com",
  databaseURL: "https://phreelance-34ba2.firebaseio.com",
  projectId: "phreelance-34ba2",
  storageBucket: "phreelance-34ba2.appspot.com",
  messagingSenderId: "950493367643"
};
firebase.initializeApp(config);
//set variable to access database
const db = firebase.database()



import {createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation'

//==================Draw Navigator==================//

// const AppDrawerNavigator = createDrawerNavigator({
//   Login: {
//     screen: Login
//   }
// })

//==================Stack Navigator==================//

const AppStackNavigator = createStackNavigator({
  Welcome:{screen: Home},
  Login:{screen: Login},
  SignUp:{screen: SignUp},
  Dashboard:{screen: Dashboard}
})


export default createAppContainer(AppStackNavigator)

//==================Tab Navigator==================//

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Dashboard: Dashboard,
  Profile: Profile
})



//==================React Native Styles==================//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
