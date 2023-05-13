import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home - Summary of everything</Text>
    <Text>Settings on the top left.</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: "center",
        backgroundColor: "blue",
    }
});

export default HomeScreen;