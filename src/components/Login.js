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
      password: '',
    }
  }

  //==================App Functions==================//

  fetchUserData = () => {
    fetch('https://phreelance-34ba2.firebaseio.com/users.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(jData => {
      this.setState({
      users: jData,
      imageKeys: Object.keys(jData[0].images),
      imageArray: Object.values(jData[0].images)
    })
    console.log(this.state);
  })
  .catch(err => console.log(err))
  }

  componentDidMount(){
    //Fetching data from firebase
    //End fetch
    this.fetchUserData()
  }

  loginUser = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        this.props.navigation.navigate('Dashboard', {
          users: this.state.users,
          imageKeys: this.state.imageKeys,
          imageArray: this.state.imageArray
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
    backgroundColor: '#729eba',
    justifyContent: 'center',
    padding: 10,
  },
});
