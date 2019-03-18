import React, {Component} from 'react';
import { StyleSheet, Text, View, AlertIOS } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, List, ListItem, Button } from 'native-base';
import * as firebase from "firebase"



//==================SignUp==================//

export default class SignUp extends Component {
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
      AlertIOS.alert('Thank you for signing up! Please Login!')
      this.props.navigation.navigate('Login')
    }
    catch(error) {
      console.log(error.toString());
    }
  }

//==================App Render==================//

  render() {
    return (
        <Container style={styles.container}>
          <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top', paddingBottom: 150, color: 'white'}}> Phreelance </Text>
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
    backgroundColor: '#729eba',
    justifyContent: 'center',
    padding: 10,
  },
});
