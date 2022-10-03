
import { StyleSheet, Text, View } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

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
        backgroundColor: "rgba( 70, 34, 10, 0.8 )",
        backdropFilter: "blur(8px)",
    },
    image: {
        width:"80%",
        height:"80%",
        backgroundColor:"white",
    }
  });
  