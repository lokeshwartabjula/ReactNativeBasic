import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class LikeCounter extends Component {
    state={
        count:0
    }
      updateCount= ()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <View>
                <Text> {this.state.count} </Text>
                <Button onPress={this.updateCount} title='Like'></Button>
            </View>
        )
    }
}
