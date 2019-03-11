//==================Imports/Config==================//

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

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

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation'

//==================Home==================//

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  //==================App Functions==================//

  signUpUser = (email, password) => {
    try {
      if(this.state.password < 6) {
        alert("Password Must Be 6 Characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error) {
      console.log(error.toString());
    }
  }

  loginUser = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user);
      })
    }
    catch(error) {
      console.log(error.toString());
    }
  }

//==================App Render==================//

  render() {
    return (
        <Container style={styles.container}>
          <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top'}}> Phreelance </Text>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
            <Button style={{marginTop: 10}}
            full
            rounded
            success
            onPress={()=> this.loginUser(this.state.email, this.state.password)}
            >
            <Text style={{color: 'white'}}>Log In</Text>
            </Button>
            <Button style={{marginTop: 10}}
            full
            rounded
            primary
            onPress={()=> this.signUpUser(this.state.email, this.state.password)}
            >
            <Text style={{color: 'white'}}>Sign Up</Text>
            </Button>
          </Form>
        </Container>
    );
  }
}

//==================Feed==================//
class Feed extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Feed</Text>
      </View>
    )
  }
}


//==================App==================//

class App extends Component {
  render(){
      return(
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    )
  }
}

//==================Tab Navigator==================//

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Feed: Feed,
  App: App
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
