import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RequestList from './RequestList';

const Requests = () => (
  <View style={styles.container}>
    <Text>Give Menu</Text>
    <RequestList/>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: "center",
        backgroundColor: "green",
    }
});

export default Requests;