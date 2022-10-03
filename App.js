import { StatusBar } from 'expo-status-bar';
import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './pages/home.page';
import TrackBrowser from './pages/trackbrowser.page';
import orange from './assets/orange.jpg';
import { StateProvider } from './state/provider';
import Swiper from 'react-native-swiper/src';

export default function App() {

  return (
    <StateProvider>
      <Image source = {{uri: orange}} style = {styles.background}></Image>
      <Swiper>
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
    position:"absolute",
    width: '100vw',
    height: '100vh',
  }
});
