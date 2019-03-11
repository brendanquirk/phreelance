import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base';

//==================Profile==================//

export default class Profile extends Component {
  render(){
      return(
      <Container style={styles.container}>
        <Text>Profile Page</Text>
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
