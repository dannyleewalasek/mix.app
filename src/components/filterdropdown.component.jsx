
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect} from 'react';
import { AppContext } from '../state/provider';
import { getAlbumArt, getAlbums } from '../utils/musixmatch.utils';
import React, {useContext} from 'react';
import Track from './trackresult.component';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FilterDropdown({title, tracks}) {
    const [selected, setSelected] = useState(false);
    const {state} = useContext(AppContext)
    const getArtwork = async() => {
      const albums = await getAlbums("foo fighters")
      const albumArt = await getAlbumArt(albums[0])
    }
    useEffect(() => {
      // getArtwork() //PUT BACK!!
      setSelected(false)
    }, [state.filter]);
    
    return (
      <View style={{...styles.container, height : selected ? "auto" : 50}} >
        <Pressable onPress = {() => setSelected(!selected)}><View style = {styles.banner} >
            <View><Text style={styles.title}>{title} {tracks.length} Song{tracks.length > 1 && "s"}</Text></View>
            <View><Icon color = "white" name = {selected ? "chevron-up" : "chevron-down"}/></View>
        </View></Pressable>
         {tracks.map((track, key) => {
          return <Track key = {key} id = {key} track = {track} />
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        backgroundColor: "rgba(0,0,255,0.2)",
        backdropFilter: "blur(8)",
        boxSizing:"border-box",
        overflow:"hidden",
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255, 0.1)",
        borderStyle: "solid"
    },
    banner: {
        justifyContent:"space-evenly",
        alignItems:"center",
        height:100,
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255, 0.1)",
        borderStyle: "solid",
    },
    title: {
        color:"white"
    }
  });
  