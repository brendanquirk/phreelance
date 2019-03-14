import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';
import * as firebase from "firebase"

//==================Dashboard==================//
export default class Dashboard extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <Text>Images: </Text>
        <Image
        source={{uri: this.props.navigation.getParam("users").brendan.images.image1}}
        style ={{width: 250, height: 250}}/>
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
