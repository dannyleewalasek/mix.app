
import { StyleSheet, View } from 'react-native';
import { StateContext, StateDispatchContext } from '../state/provider';
import React, {useContext} from 'react';
import FilterButton from '../ui/filterbutton.ui';

export default function Filter() {

    const {setFilter} = useContext(StateDispatchContext);
    return (
      <View style={styles.container}>
        <FilterButton text = "Song" onClick = {() => setFilter({filter: "song"})}/>
        <FilterButton text = "Artist" onClick = {() => setFilter({filter: "artist"})}/>
        <FilterButton text = "Album" onClick = {() => setFilter({filter: "album"})}/>
        <FilterButton text = "Genres" onClick = {() => setFilter({filter: "genre"})}/>
        <FilterButton text = "Playlists" onClick = {() => setFilter({filter: "playlist"})}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "auto",
        padding:"8px",
        width: "100%",
        backgroundColor: "rgba(0,0,255,0.2)",
        backdropFilter: "blur(8px)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        boxSizing:"border-box",
        boxShadow:  "0px 12px 12px -7px rgba(0, 0, 0, 0.26)"
    },
  });
  