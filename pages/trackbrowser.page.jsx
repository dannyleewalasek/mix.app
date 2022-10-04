
import { StyleSheet, Text, ScrollView } from 'react-native';
import Filter from '../components/musicfilter.component';
import FilterDropdown from '../components/filterdropdown.component';
import { StateContext, StateDispatchContext } from '../state/provider';
import React from 'react';

export default function TrackBrowser() {
    const state = React.useContext(StateContext)
    const {filter} = React.useContext(StateContext).filter
    let filtered = {}
    let groupings = []

    state.searchResults?.forEach((track) => {
      if (filtered.hasOwnProperty(track[filter]))
        filtered[track[filter]].push(track)
      else
        filtered[track[filter]] = [track]
    })

    Object.keys(filtered).forEach((el, key) => {
      groupings.push(<FilterDropdown key = {key} title = {el} tracks = {filtered[el]}/>)
    })
    return (
      <>
      <Filter></Filter>
      <ScrollView style = {styles.container}>
      {groupings}
      </ScrollView></>
    );
  }

  const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,255,0.1)",
        backdropFilter: "blur(8px)",
    },
  });
  