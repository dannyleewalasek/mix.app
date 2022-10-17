
import { StyleSheet, View } from 'react-native';
import { StateDispatchContext } from '../state/provider';
import React, {useContext} from 'react';
import FilterButton from '../ui/filterbutton.ui';

export default function Filter() {

    const {setFilter} = useContext(StateDispatchContext);
    return (
      <View style={styles.container}>
        <FilterButton text = "Song" onPress = {() => setFilter({filter: "song"})}/>
        <FilterButton text = "Artist" onPress = {() => setFilter({filter: "artist"})}/>
        <FilterButton text = "Album" onPress = {() => setFilter({filter: "album"})}/>
        <FilterButton text = "Genres" onPress = {() => setFilter({filter: "genre"})}/>
        <FilterButton text = "Playlists" onPress = {() => setFilter({filter: "playlist"})}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "auto",
        padding:8,
        width: "100%",
        backgroundColor: "rgba(0,0,255,0.1)",
        backdropFilter: "blur(8)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        boxSizing:"border-box",
        boxShadow:  "0 12 12 -7 rgba(0, 0, 0, 0.26)"
    },
  });
  