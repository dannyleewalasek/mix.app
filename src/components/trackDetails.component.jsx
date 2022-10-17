import { View, Text, StyleSheet } from "react-native"

const TrackDetails = ({track}) => {
    return (
        <View style = {style.container}>
            <Text style = {style.songName}>{track.track}</Text>
            <Text style = {style.artist}>{track.artist}</Text>
            <Text style = {style.albumName}>{track.album}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    songName:{
        color:"white",
        fontSize: 50
    },
    artist: {
        color:"white",
        fontSize: 30
    },
    albumName: {
        color:"white",
        
        fontSize: 30
    }
})

export default TrackDetails