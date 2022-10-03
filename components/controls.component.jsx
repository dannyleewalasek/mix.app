
import { StyleSheet, Text, View } from 'react-native';
import { StateContext, StateDispatchContext } from '../state/provider';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from '../ui/progressbar.ui';

export default function Controls() {
    const state = React.useContext(StateContext)
    return (
      <View style={styles.container}>
        <ProgressBar/>
        <Icon name = "repeat" color = "white" size = {15}/>
        <Icon name = "backward" color = "white" size = {30}/>
        <Icon name = "play" color = "white" size = {40}/>
        <Icon name = "forward" color = "white" size = {30}/>
        <Icon name = "sliders" color = "white" size = {15}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "20%",
        width: "100%",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        backdropFilter: "blur(8px)",
        backgroundColor:"rgba(0,0,0,0.2)",
        justifyContent:"space-around",
        alignItems:"center",
        padding:"16px"
    },
  });
  