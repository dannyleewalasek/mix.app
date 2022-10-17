import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function FilterButton({text, onPress}) {
    return (<Pressable><Text style = {styles.text} onPress = {onPress}>{text.toUpperCase() }</Text></Pressable>)
}

const styles = StyleSheet.create({
    text: {
        color:"white",
        fontStyle:"bold",
    },
  });
  