import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Item = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo1.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default Item;
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Item = ({ title, description }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.description}>{description}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 10,
//     width: 300,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// export default Item;

