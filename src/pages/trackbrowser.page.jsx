
import { StyleSheet, ScrollView } from 'react-native';
import Filter from '../components/musicfilter.component';
import FilterDropdown from '../components/filterdropdown.component';
import { AppContext } from '../state/provider';
import React, {useContext} from 'react';

export default function TrackBrowser() {
    const {state} = useContext(AppContext)
    let groupings = []

    Object.keys(state.filtered).forEach((el, key) => {
      groupings.push(<FilterDropdown key = {key} title = {el} tracks = {state.filtered[el]}/>)
    })
    return (
      <>
      <Filter />
      <ScrollView style = {styles.container}>
        {groupings}
      </ScrollView></>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
  });
  