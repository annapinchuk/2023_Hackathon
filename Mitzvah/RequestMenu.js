import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RequestMenu = () => (
  <View style={styles.container}>
    <Text>RequestMenu</Text>
    <Text>New Users would fill out a form here if they are unauthenticated</Text>

  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: "center",
        backgroundColor: "cyan",
    }
});

export default RequestMenu;