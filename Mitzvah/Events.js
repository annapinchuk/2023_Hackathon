import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Events = () => (
  <View style={styles.container}>
    <Text>Events</Text>
    <Text>Accurate map, shows open requests to attend an event</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: "center",
        backgroundColor: "purple",
    }
});

export default Events;