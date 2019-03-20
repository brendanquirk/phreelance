import React, {Component} from 'react';
import { StyleSheet, Text, View, AlertIOS, Image } from 'react-native';
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
          <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top', paddingBottom: 75, color: 'white'}}> Phreelance </Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={{uri: 'https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: 400, height: 250, marginBottom: 50, borderRadius: 20}}/>
          </View>
          <Form>
            <Item floatingLabel>
              <Label style={{color: 'white'}}>Email</Label>
              <Input
                style={{color: 'white'}}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{color: 'white'}}>Password</Label>
              <Input
                style={{color: 'white'}}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
            <Button style={{marginTop: 10, marginBottom: 80}}
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
    backgroundColor: 'rgba(38, 133, 186, 0.77)',
    justifyContent: 'center',
    padding: 10,
  },
});
