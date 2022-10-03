
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProgressBar() {
    return (
      <View style={styles.container}>
        <View style = {{...styles.bar, width: "50%"}}></View>
        {/* <Icon name = "circle" color = "purple" size = {15}/> */}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flexBasis:"100%",
        width:"80%",
        backgroundColor:"gray",
        // display:"flex",
        // flexDirection:"row"
    },
    bar: {
        backgroundColor:"purple",
        height:"4px",
        // filter:"blur(2px)"
    }
  });
  