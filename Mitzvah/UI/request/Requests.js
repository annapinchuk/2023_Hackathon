import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import RequestItem from "./RequestItem.js";
const Requests = () => {
  let items = []
  for (let i = 0; i < 20; i++) {
    items.push({ id: i, title: 'Item ' + i, description: 'Description for Item ' + i, imageUrl: 'https://www.photo-art.co.il/wp-content/uploads/2015/09/BY1A4457.jpg' })
  }

  return (
    // source={require('./assets/logo1.png')}
    <View>



      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>רוצה לתרום??</Text>
        </View>


      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {items.map((item) => (
          <RequestItem title={item.title} description={item.description} imageUrl={item.imageUrl} />
        ))}
      </ScrollView>
    </View>

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
  header: {
    height: 70,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 10,
    paddingTop: 10,
  },
});

export default Requests;
