import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet } from 'react-native'
import ShowText from './ShowText';

export default class Binding extends Component {

    constructor(props){
        super(props);
        this.state ={
            text:''
        }
    }
  render() {
    return (
      <View>
       <ShowText label={'User Name'}></ShowText>  
      <TextInput style={styles.textBox} onChangeText={txt=>{this.setState({text:txt})}}></TextInput>
        <Text>{this.state.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  textBox:{

    borderBottomColor:'blue',
    borderBottomWidth:2
  }
})