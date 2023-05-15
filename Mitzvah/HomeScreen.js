
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Item from "./Item.js";
const HomeScreen = () => {
  let items = []
  for (let i = 0; i < 20; i++) {
    items.push( { id: i, title: 'Item '+i, description: 'Description for Item '+i })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
  {items.map((item) => (
    <Item title={item.title} description={item.description} />
        
      ))}
  
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
