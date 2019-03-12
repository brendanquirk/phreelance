import React, {Component} from 'react';
import { StyleSheet, Text, View, AlertIOS, Button } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, List, ListItem } from 'native-base';
import * as firebase from "firebase"



//==================Home==================//

export default class Home extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  setInitialState = (snapshot) => {
    this.setState({
      images: snapshot
    })
  }

  render(){
    return(
      <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 75, textAlignVertical: 'top', paddingBottom: 300}}> Phreelance </Text>
        <Button style={{}} title='Login' onPress={()=> this.props.navigation.navigate('Login')}/>
        <Button title='SignUp' onPress={()=> this.props.navigation.navigate('SignUp')}/>
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
