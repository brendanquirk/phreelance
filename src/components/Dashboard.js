import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';
import * as firebase from "firebase"

//==================Dashboard==================//
export default class Dashboard extends Component {
  render(){
    const getUsers = this.props.navigation.getParam("users")
    const imageKeys = this.props.navigation.getParam("imageKeys");
    return(
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
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
