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

  render() {
    return (
        <Container style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
              />
            </Item>
            <Button style={{marginTop: 10}}
            full
            rounded
            success
            >
            <Text>Log In</Text>
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
