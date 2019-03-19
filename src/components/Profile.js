import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackround, ScrollView, TextInput } from 'react-native';
import { Container, Content, Header, Form, Item, Button, Label, List, ListItem } from 'native-base';
import * as firebase from "firebase"

//==================Profile==================//

export default class Profile extends Component {
  constructor(){
    super()
      this.state = {
      }
  }
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
    console.log('==========');
    console.log(image);
    fetch(`https://phreelance-34ba2.firebaseio.com/users/0/images/.json`, {
      body: JSON.stringify(image),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdImage => {
      this.setState({
        imageArray: [this.state.imageArray, ...createdImage.json()]
      })
    })
    .catch(err => console.log(err))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('=======');
    console.log(this.state);
    this.handleCreateImage(this.state)
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  removeFromArray = (array, arrayIndex) => {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  handleDelete = (arrayIndex, array) => {
    fetch(`https://phreelance-34ba2.firebaseio.com/users/0/images/${imageKeys}.json`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeFromArray('imageArray', arrayIndex)
    })
    .catch(err=> console.log(err))
  }

  render(){
    const getUsers = this.props.navigation.getParam("users")
    const imageKeys = this.props.navigation.getParam("imageKeys");
    const imageArray = this.props.navigation.getParam("imageArray")
    console.log(imageKeys[0]);

      return(

      <Container style={styles.container}>
      <ScrollView>
        <Text style={{color:'white', textAlign: 'center', fontSize: 50, marginTop: 50}}>Profile Page</Text>
        <Text style={{textAlign: 'center', fontSize: 25, paddingBottom: 15, color: 'white'}}>User: {getUsers[0].name}</Text>
        <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
        {imageArray.map((image, index) => {
          return(
            <>
            <Image
            key={index}
            source={{uri: image.image}}
            style ={{width: 250, height: 250, borderWidth: 1, borderRadius: 40, marginBottom:5}}/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
            <Button style={{alignItems: 'center'}}><Text style={{color:'white'}}>Delete Image</Text></Button>
            </View>
            </>
          )
        })}
        </View>
        <View style={{borderTopWidth:1, borderBottomWidth:1}}>
        <TextInput
          style={{height: 40}}
          placeholder="Image URL Here"
          onChangeText={(text) => this.setState({image: text})}
        />
        </View>
        <Button style={{marginTop: 20}}title='Submit Image' onPress = {()=> this.handleCreateImage(this.state)}
        full
        rounded
        primary
        >
        <Text style={{color: 'white'}}>Submit Image</Text>
        </Button>
        <Button style={{marginTop: 20}}title='SignOut' onPress={()=> this.signOutUser() }
        full
        rounded
        primary
        >
        <Text style={{color: 'white'}}>Sign Out</Text>
        </Button>
        </ScrollView>
      </Container>

    )
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
