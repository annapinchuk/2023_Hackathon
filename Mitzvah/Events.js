

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

//IOS uses Apple Maps, Android uses Google maps. Test the difference between the 2!
const InteractiveMap = () => {

  const arielUniversityLocation = {
    latitude: 32.104434,
    longitude: 35.2052702,
    latitudeDelta: 0.0099,
    longitudeDelta: 0.0099,
  }

  const testMarker = {
    latitude: 32.104434,
    longitude: 35.2052702,
    latitudeDelta: 0.0099,
    longitudeDelta: 0.0099,
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={arielUniversityLocation}>
        <Marker
        coordinate={{ latitude: 32.104434, longitude: 35.2052702 }}
          title="אירוע יום הולדת"
          description="test test test"
          onPress={() => {console.log("Marker Pressed!")}} >
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default InteractiveMap;