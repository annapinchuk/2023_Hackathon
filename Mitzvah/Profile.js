import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


const Profile = () => (
  <View style={styles.container}>
    <Text>Profile</Text>
    <Text>History/Active Requests and Relevant data</Text>
    <Text>Change Personal Details</Text>

  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: "center",
        backgroundColor: "yellow",
    }
});

export default Profile;