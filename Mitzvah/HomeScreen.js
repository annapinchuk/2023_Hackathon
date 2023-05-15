
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Item from "./Item.js";
const HomeScreen = () => {
  const items = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' },
    // Add more items here
  ];
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
