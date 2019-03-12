import React, {Component} from 'react';
import { StyleSheet, Text, View, AlertIOS } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';
import * as firebase from "firebase"



//==================Login==================//

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  //==================App Functions==================//

  loginUser = (email, password) => {
    console.log('login user is running');
    console.log(email);

    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user);
        AlertIOS.alert('You are now logged in!')
        console.log(this.props.navigation);
        //Fetching data from firebase
        const firebaseTest = () => {
          let userId = firebase.auth();
          console.log(userId);
          return firebase.database().ref('/users/').once('value').then((snapshot) => {
            console.log(snapshot.val().brendan.images);
            let username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          })
        }
        console.log(firebaseTest());
        this.props.navigation.navigate('Dashboard', {
          test: "Test"
        })
      })
    }
    catch(error) {
      console.log(error.toString());
    }
  }

  loginFunction = (email, password) => {
    this.loginUser(this.state.email, this.state.password);

  }

//==================App Render==================//

  render() {
    return (
        <Container style={styles.container}>
          <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top', paddingBottom: 300}}> Phreelance </Text>
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
