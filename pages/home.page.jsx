
import { StyleSheet, Text, View } from 'react-native';
import CoverArt from '../components/coverart.component';
import { StateContext, StateDispatchContext } from '../state/provider';
import React from 'react';
import Controls from '../components/controls.component';

export default function Home() {
    const state = React.useContext(StateContext)
    return (
      <View style={styles.container}>
        <CoverArt></CoverArt>
        <Controls/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,255,0.1)",
        backdropFilter: "blur(8px)",
        display:"flex",
        justifyContent:"space-between",
        boxSizing:"border-box",
    },
  });
  