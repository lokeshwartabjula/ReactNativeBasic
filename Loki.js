import React from 'react';
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';
import LikeCounter from './LikeCounter';
import Binding from './TakeInput';
import ShowLocation from './ShowLocation';
import AppContainer from './AppContainer';
import DefaultMarkers from './DefaultMarker';
import LiteMapView from './LiteMapView';

export default function App() {
  return (
    <View style={styles.container}>
  <AppContainer></AppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
