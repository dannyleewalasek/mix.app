
import { StyleSheet, View, Pressable } from 'react-native';
import { StateContext, StateDispatchContext } from '../state/provider';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from '../ui/progressbar.ui';

export default function Controls() {
    const {playbackStatus} = React.useContext(StateContext)
    const {setPlaybackStatus} = useContext(StateDispatchContext);
    return (
      <View style={styles.container}>
        <ProgressBar time = {playbackStatus.time} length = {playbackStatus.length}/>
          <View style = {styles.buttons}>
            <Icon name = "repeat" color = "white" size = {15}/>
            <Icon name = "backward" color = "white" size = {30}/>
            <Pressable onPress={() => setPlaybackStatus((prevState) => ({...prevState, playing:!prevState.playing}))}><Icon name = {playbackStatus.playing ? "play" : "pause"} color = "white" size = {40} 
            /></Pressable>
            <Icon name = "forward" color = "white" size = {30}/>
            <Icon name = "sliders" color = "white" size = {15}/>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "auto",
        width: "100%",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        backdropFilter: "blur(8)",
        backgroundColor:"rgba(0,0,0,0.2)",
        justifyContent:"space-around",
        alignItems:"center",
        padding:16
    },
    buttons: {
      flexBasis:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginTop:64

    }
  });
  