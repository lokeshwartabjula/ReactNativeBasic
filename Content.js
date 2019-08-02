import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Content = () => {
    return (
        <View style= {styles.container}>
          <Text style={{fontSize:18}}>View Example</Text>
        </View>
    )
};

const styles = StyleSheet.create({ 
    container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
},  
})
export default Content

