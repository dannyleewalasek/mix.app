import { StyleSheet, Text, View } from 'react-native';
import { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../state/provider';


export default function Track ({track})  {
    const [selected, setSelected] = useState(false);
    const {dispatch} = useContext(AppContext);
    return (
        <View style ={{...styles.row, height: selected ? 300 : 100}} >
            <View style={styles.basicContainer}>
            <Text style ={styles.id} onPress = {() => dispatch({type: "SETTRACK", payload:track})}><Icon name = "play"></Icon></Text>
            <View style = {styles.artistandtitle}>
                <Text style ={styles.track}>{track.track.toUpperCase()}</Text>
                <Text style ={styles.artist}>{track.artist}</Text>
            </View>
            <Text style ={styles.length}>{track.length}</Text>
            <Text style ={styles.expand} onPress = {() => setSelected(!selected)}><Icon name = "bars"/></Text>
            </View>
            {selected ? <Text>yes</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        transition: "0.5s",
        color:"white",
        width:"100%",
        paddingTop: 30,
        height: 100,
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent:"space-around",
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255, 0.1)",
        borderStyle: "solid",
    },
    basicContainer: {
        flexBasis:"100%",
        transition: "0.5s",
        color:"white",
        width:"100%",
        height: 100,
        flexDirection: "row",
        justifyContent:"space-around",
    },
    id: {
        color:"white",
        width:"5%"
    },
    artist: {
        color:"white",
    },
    track: {
        color:"white",
        fontSize:10
    },
    length: {
        color:"pink",
        width: "10%"
    },
    expand: {
        color:"white",
        width:"5%"
    },
    artistandtitle: {
        flexDirection:"column",
        width:"20%"
    }
  });
  