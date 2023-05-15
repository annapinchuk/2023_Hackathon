
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Item 1</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 2</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 3</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 4</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 5</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 6</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 7</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 8</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 9</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Item 10</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
