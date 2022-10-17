
import { StyleSheet, View } from 'react-native';
import { AppContext } from '../state/provider';
import React, {useContext} from 'react';
import FilterButton from '../ui/filterbutton.ui';

export default function Filter() {

    const {dispatch} = useContext(AppContext);
    return (
      <View style={styles.container}>
        <FilterButton text = "Song" onPress = {() => dispatch({type: "SETFILTER", payload: "song"})}/>
        <FilterButton text = "Artist" onPress = {() => dispatch({type: "SETFILTER", payload: "artist"})}/>
        <FilterButton text = "Album" onPress = {() => dispatch({type: "SETFILTER", payload: "album"})}/>
        <FilterButton text = "Genres" onPress = {() => dispatch({type: "SETFILTER", payload: "genre"})}/>
        <FilterButton text = "Playlists" onPress = {() => dispatch({type: "SETFILTER", payload: "playlist"})}/>
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
  