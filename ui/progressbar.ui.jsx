
import { StyleSheet, View } from 'react-native';
import React from 'react';

export default function ProgressBar({time, length}) {
  const currentPosition = time / (length / 100)
    return (
      <View style={styles.container}>
        <View style = {{...styles.bar, width: currentPosition + "%"}}></View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flexBasis:"100%",
        width:"80%",
        backgroundColor:"gray",
    },
    bar: {
        backgroundColor:"purple",
        height:"4px",
    }
  });
  