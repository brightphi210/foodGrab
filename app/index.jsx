import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';
import { useNavigation } from 'expo-router';

const IndexScreen = () => {
  const myNavigate = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      myNavigate.navigate('Dashboard/DashHome');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/foodGrab2.png')}
        style={styles.imageDiv}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.myRed,
  },

  imageDiv: {
    width: 150,
    height: 50,
  },
});
