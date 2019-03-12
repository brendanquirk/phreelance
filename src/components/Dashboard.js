import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';

//==================Dashboard==================//
export default class Dashboard extends Component {
  render(){
    const {navigation} = this.props
    const items = navigation.getParam(items)
    return(
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <Text>Items: {this.props.navigation.getParam("test")}</Text>
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
