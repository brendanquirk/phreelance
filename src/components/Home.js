import React, {Component} from 'react';
import { StyleSheet, Text, View, AlertIOS, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, List, ListItem, Button } from 'native-base';
import * as firebase from "firebase"



//==================Home==================//

export default class Home extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(

      <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top', paddingBottom: 75, color: 'white'}}> Phreelance </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={{uri: 'https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: 400, height: 250, marginBottom: 50, borderRadius: 20}}/>
      </View>
        <Button
        title='Login' onPress={()=> this.props.navigation.navigate('Login')}
        full
        rounded
        success
        >
        <Text style={{color: 'white'}}>Log In</Text>
        </Button>
        <Button style={{marginTop: 20, marginBottom: 60}}title='SignUp' onPress={()=> this.props.navigation.navigate('SignUp')}
        full
        rounded
        primary
        >
        <Text style={{color: 'white'}}>Sign Up</Text>
        </Button>
      </View>
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
