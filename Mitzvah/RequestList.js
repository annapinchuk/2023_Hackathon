import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RequestList = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const handleDeleteItem = (item) => {
    // Handle delete item action
    console.log(`Deleting ${item}`);
  };

  const handleSelectItem = (item) => {
    // Handle select item action
    console.log(`Selected ${item}`);
  };

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDeleteItem(item)}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
          <Text style={styles.itemText}>{item}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSelectItem(item)}
          >
            <Text style={styles.buttonText}>v</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RequestList;