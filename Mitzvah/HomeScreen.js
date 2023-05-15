// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HomeScreen = () => (
//   <View style={styles.container}>
//     <Text>Home - Summary of everything</Text>
//     <Text>Settings on the top left.</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center', 
//         alignItems: "center",
//         backgroundColor: "blue",
//     }
// });

// export default HomeScreen;





import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, marginHorizontal: 8, marginVertical: 8 }}
        source={require('./profile.png')}
      >
        <View style={{ flex: 1 }} />
        <View
          style={{
            position: 'absolute',
            bottom: '23.392613%',
            width: '100%',
            height: 0,
            borderTopWidth: 1,
            borderTopColor: 'gray',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '31.32695%',
            width: '100%',
            height: 0,
            borderTopWidth: 1,
            borderTopColor: 'gray',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '23.392613%',
            right: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ width: 24, height: 24 }}
            source={require('./images.png')}
          />
          <Text style={{ marginLeft: 8 }}>לחץ על הפעמון</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
