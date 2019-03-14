import React, {Component} from 'react';
import { StyleSheet, Text, View, AlertIOS } from 'react-native';
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
      <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top', paddingBottom: 150}}> Phreelance </Text>
        <Button
        title='Login' onPress={()=> this.props.navigation.navigate('Login')}
        full
        rounded
        success
        >
        <Text style={{color: 'white'}}>Log In</Text>
        </Button>
        <Button style={{marginTop: 20}}title='SignUp' onPress={()=> this.props.navigation.navigate('SignUp')}
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
