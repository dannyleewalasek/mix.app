
import { StyleSheet, View } from 'react-native';

export default function CoverArt() {
    return (
      <View style={styles.container}>
        <View style={styles.image}></View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "50%",
        width: "100%",
        backdropFilter: "blur(8)",
        justifyContent:"center",
        alignItems:"center"
    },
    image: {
        width:"80%",
        height:"80%",
        backgroundColor:"white",
        shadowColor: "#000", shadowOffset:{ width: 0,height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
  });
  