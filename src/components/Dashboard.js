import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';

//==================Dashboard==================//
export default class Dashboard extends Component {
  render(){
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
