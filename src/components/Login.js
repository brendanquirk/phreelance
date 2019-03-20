import React, {Component} from 'react';
import { StyleSheet, Text, View, AlertIOS, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';
import * as firebase from "firebase"



//==================Login==================//

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  //==================App Functions==================//

  loginUser = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        this.props.navigation.navigate('Dashboard', {
          users: this.state.users,
          imageKeys: this.state.imageKeys,
          imageArray: this.state.imageArray,
          handleCreateImage: this.handleCreateImage
        })
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
          <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top', paddingBottom: 75, color: 'white'}}> Phreelance </Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={{uri: 'https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: 400, height: 250, marginBottom: 50, borderRadius: 20}}/>
          </View>
          <Form>
            <Item floatingLabel>
              <Label style={{color:'white'}}>Email</Label>
              <Input
                style={{color:'white'}}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{color:'white'}}>Password</Label>
              <Input
                style={{color:'white'}}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
            <Button style={{marginTop: 10, marginBottom: 80}}
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
    backgroundColor: 'rgba(38, 133, 186, 0.77)',
    justifyContent: 'center',
    padding: 10,
  },
});
