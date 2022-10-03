
import { StyleSheet, Text, ScrollView } from 'react-native';
import Track from '../components/trackresult.component';
import { StateContext, StateDispatchContext } from '../state/provider';
import React from 'react';

export default function TrackBrowser({tracks}) {
    const state = React.useContext(StateContext)
    console.log(tracks)
    return (
      <ScrollView style = {styles.container}>
        {state.searchResults.map((track, key) => {
          return <Track key = {key} id = {key} track = {{artist: "me", track: "tune", length: 100}} />
        })}
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,255,0.1)",
        backdropFilter: "blur(8px)",
    },
  });
  