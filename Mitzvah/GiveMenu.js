import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GiveMenu = () => (
  <View style={styles.container}>
    <Text>Give Menu</Text>
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

export default GiveMenu;