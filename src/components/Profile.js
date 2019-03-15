import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackround } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';
import * as firebase from "firebase"

//==================Profile==================//

export default class Profile extends Component {
  signOutUser = () => {
    try {
      firebase.auth.signOut().then((user) => {
        this.props.navigation.navigate('Home')
      })
    } catch (error){
      console.log(error);
    }
  }

  handleCreateImage = (image) => {
    fetch(`https://phreelance-34ba2.firebaseio.com/users/0/images/.json`, {
      body: JSON.stringify(image),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdImage => {
      return createdImage.json()
    })
    .catch(err => console.log(err))
  }

  handleSubmit = () => {
    event.preventDefault()
    console.log(this.state);
    this.props.handleCreateImage(this.state)
  }

  render(){
    const getUsers = this.props.navigation.getParam("users")
    const imageKeys = this.props.navigation.getParam("imageKeys");
    console.log(imageKeys[0]);

      return(
      <Container style={styles.container}>
        <Text style={{textAlign: 'center'}}>Profile Page</Text>
        <Text style={{textAlign: 'center'}}>User: {getUsers[0].name}</Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
        source={{uri: getUsers[0].images[imageKeys[0]].image2}}
        style ={{width: 250, height: 250, borderWidth: 1, borderRadius: 40}}/>
        <Image
        source={{uri: getUsers[0].images.image2}}
        style ={{width: 250, height: 250, borderWidth: 1, borderRadius: 40}}/>
        </View>
        <Button style={{marginTop: 20}}title='SignOut' onPress={()=> this.signOutUser() }
        full
        rounded
        primary
        >
        <Text style={{color: 'white'}}>Sign Out</Text>
        </Button>
      </Container>
    )
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
