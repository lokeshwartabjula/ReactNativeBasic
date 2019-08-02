import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 12.9516327;
const LONGITUDE = 80.1903136;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const cords ={
  latitude : 12.9516327,
longitude : 80.1903136,

}
const SAMPLE_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

class LiteMapView extends React.Component {
  render() {
    
    return (
      <ScrollView style={StyleSheet.absoluteFillObject}>
      <MapView  style={styles.map}
      region={SAMPLE_REGION} showsUserLocation={true}>
      <MapView.Marker
      coordinate={cords}
      title="My Marker"
      description="Some description"
    />
</MapView>
            </ScrollView>

            
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginVertical: 50,
  },
});

export default LiteMapView;