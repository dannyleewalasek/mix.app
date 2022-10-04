import { StyleSheet, Text, View } from 'react-native';

export default function FilterButton({text, onClick}) {
    return (<Text style = {styles.text} onClick = {onClick}>{text.toUpperCase() }</Text>)
}

const styles = StyleSheet.create({
    text: {
        color:"white",
        fontStyle:"bold",
    },
  });
  