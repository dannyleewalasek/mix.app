
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect} from 'react';
import { StateContext } from '../state/provider';
import React from 'react';
import Track from './trackresult.component';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FilterDropdown({title, tracks}) {
    const [selected, setSelected] = useState(false);
    const {filter} = React.useContext(StateContext).filter
    useEffect(() => {
      setSelected(false)
    }, [filter]);
    return (
      <View style={{...styles.container, height : selected ? "auto" : "50px"}} >
        <View style = {styles.banner} onClick = {() => setSelected(!selected)}>
            <View><Text style={styles.title}>{title} {tracks.length} Songs</Text></View>
            <View><Icon color = "white" name = {selected ? "chevron-up" : "chevron-down"}/></View>
        </View>
         {tracks.map((track, key) => {
          return <Track key = {key} id = {key} track = {track} />
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "100px",
        width: "100%",
        backgroundColor: "rgba(0,0,255,0.1)",
        backdropFilter: "blur(8px)",
        display:"flex",
        boxSizing:"border-box",
        overflow:"hidden",
        borderBottomWidth: "1px",
        borderColor: "rgba(255,255,255, 0.1)",
        borderStyle: "solid"
    },
    banner: {
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:"100px",
        borderBottomWidth: "1px",
        borderColor: "rgba(255,255,255, 0.1)",
        borderStyle: "solid",
    },
    title: {
        color:"white"
    }
  });
  