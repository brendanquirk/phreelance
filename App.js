import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

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

  loginUser = (emai, password) => {

  }

  render() {
    return (
        <Container style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
