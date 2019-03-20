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
    fetch(`https://phreelance-34ba2.firebaseio.com/users/0/images.json`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeFromArray('imageArray', arrayIndex)
    })
    .catch(err=> console.log(err))
  }

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
      console.log('===========');
      console.log(createdImage.json());
      this.fetchUserData()
      console.log('bbbbbbbbbb');
    })
    .catch(err => console.log(err))
  }

  render(){


      return(

      <Container style={styles.container}>
      <ScrollView>
        <Text style={{color:'white', textAlign: 'center', fontSize: 50, marginTop: 50}}>Profile Page</Text>
        <Text style={{textAlign: 'center', fontSize: 25, paddingBottom: 15, color: 'white'}}>User: {this.state.users ? this.state.users[0].name : ''}</Text>
        <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
        {this.state.imageArray ? this.state.imageArray.map((image, index) => {
          return(
            <>
            <Image
            key={index}
            source={{uri: image.image}}
            style ={{width: 250, height: 250, borderWidth: 1, borderRadius: 40, marginBottom:5}}/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderRadius: 20}}>
            <Button style={{borderRadius: 20, padding: 5}} danger onPress={()=> this.handleDelete()}><Text style={{color:'white'}}>Delete Image</Text></Button>
            </View>
            </>
          )
        }) : <Text>''</Text> }
        </View>
        <View style={{borderTopWidth:1, borderBottomWidth:1 , borderColor: 'white'}}>
        <TextInput
          style={{height: 40, color: 'white'}}
          placeholder="Image URL Here"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({image: text})}
        />
        </View>
        <Button style={{marginTop: 20}}title='Submit Image' onPress = {()=> this.handleCreateImage(this.state)}
        full
        rounded
        success
        >
        <Text style={{color: 'white'}}>Submit Image</Text>
        </Button>
        <Button style={{marginTop: 20}}title='SignOut' onPress={()=> this.signOutUser() }
        full
        rounded
        warning
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
    backgroundColor: 'rgba(38, 133, 186, 0.77)',
    justifyContent: 'center',
    padding: 10,
  },
});
