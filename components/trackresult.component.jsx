import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Track ({id, track})  {
    const [selected, setSelected] = useState(false);
    return (
        <View style ={{...styles.row, height: selected ? "300px" : "100px"}} >
            <View style={styles.basicContainer}>
            <Text style ={styles.id}><Icon name = "play"></Icon></Text>
            <View style = {styles.artistandtitle}>
                <Text style ={styles.track}>{track.track.toUpperCase()}</Text>
                <Text style ={styles.artist}>{track.artist}</Text>
            </View>
            <Text style ={styles.length}>{track.length}</Text>
            <Text style ={styles.expand} onClick = {() => setSelected(!selected)}><Icon name = "bars"/></Text>
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
        paddingTop: "30px",
        height: "100px",
        display:"flex",
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent:"space-around",
        borderBottomWidth: "1px",
        borderColor: "rgba(255,255,255, 0.1)",
        borderStyle: "solid",
    },
    basicContainer: {
        flexBasis:"100%",
        transition: "0.5s",
        color:"white",
        width:"100%",
        height: "100px",
        display:"flex",
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
        fontSize:"large"
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
        display:"flex",
        flexDirection:"column",
        width:"20%"
    }
  });
  