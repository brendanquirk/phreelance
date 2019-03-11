//==================Imports/Config==================//

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Profile from './src/components/Profile.js'
import Feed from './src/components/Feed.js'
import Home from './src/components/Home.js'

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



import {createBottomTabNavigator, createAppContainer} from 'react-navigation'


//==================Tab Navigator==================//

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Feed: Feed,
  Profile: Profile
})

export default createAppContainer(TabNavigator)

//==================React Native Styles==================//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
