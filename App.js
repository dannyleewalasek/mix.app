import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar, dimensions } from 'react-native';
import Home from './src/pages/home.page';
import TrackBrowser from './src/pages/trackbrowser.page';
import { StateProvider } from './src/state/provider';
import Swiper from 'react-native-swiper/src';

export default function App() {

  return (
    <StateProvider>
      <Image source={require('./src/assets/orange.jpg')} style = {styles.background}></Image>
      <Swiper loop={false}>
        <View style={styles.container}>
          <Home />
        </View>
        <View style={styles.container}>
          <TrackBrowser />
        </View>
      </Swiper>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  background: {
    flex:1,
    position:"absolute",
    width: '100%',
    height:"100%"
  }
});
