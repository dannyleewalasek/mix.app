
import { StyleSheet, View } from 'react-native';
import CoverArt from '../components/coverart.component';
import { AppContext } from '../state/provider';
import React, {useEffect, useContext} from 'react';
import Controls from '../components/controls.component';
import TrackDetails from '../components/trackDetails.component';
import { readDir, ExternalStorageDirectoryPath} from 'react-native-fs';

const Home = () => {
  const {state} = useContext(AppContext)

  useEffect(() => {
    const setTracks = async() => {
      let trackList = []

      // await readDir(`${ExternalStorageDirectoryPath}/Download`).then((res) => {
      //   res.forEach(tune => alert(tune.path))}
      //   ,(err) => alert(err))
      //   // alert(trackList[0].filepath)
      // dispatch({type:"SETFILES",payload: trackList})
    }
    
    setTracks()
  },[])
    return (
      <View style={styles.container}>
        <CoverArt/>
        <TrackDetails track = {state.track}/>
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