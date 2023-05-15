
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Item from "./Item.js";
const HomeScreen = () => {
  let items = []
  for (let i = 0; i < 20; i++) {
    items.push( { id: i, title: 'Item '+i, description: 'Description for Item '+i,imageUrl:'https://www.photo-art.co.il/wp-content/uploads/2015/09/BY1A4457.jpg' })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
  {items.map((item) => (
    <Item title={item.title} description={item.description} imageUrl={item.imageUrl}/>
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
