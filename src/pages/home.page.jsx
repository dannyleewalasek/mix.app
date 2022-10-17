
import { StyleSheet, Text, View } from 'react-native';
import CoverArt from '../components/coverart.component';
import { StateContext, StateDispatchContext } from '../state/provider';
import React, {useEffect, useContext} from 'react';
import { getDummyTracks } from '../utils/musixmatch.utils';
import Controls from '../components/controls.component';
import TrackDetails from '../components/trackDetails.component';

const Home = () => {
  const state = useContext(StateContext)
  const {setTrackDetails} = useContext(StateDispatchContext);

  useEffect(() => {
    const setTracks = async() => {
      const tracks = await getDummyTracks()
      setTrackDetails({searchResults: tracks})
    }
    setTracks()
  },[])
    return (
      <View style={styles.container}>
        <CoverArt/>
        <TrackDetails track = {state.playbackStatus.track}/>
        <Controls/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display:"flex",
        justifyContent:"space-around",
        boxSizing:"border-box",
    },
  });
  
  export default Home