
import { StyleSheet, Text, ScrollView } from 'react-native';
import Filter from '../components/musicfilter.component';
import FilterDropdown from '../components/filterdropdown.component';
import { StateContext, StateDispatchContext } from '../state/provider';
import React, {useEffect} from 'react';

export default function TrackBrowser() {
    const state = React.useContext(StateContext)
    const {filter} = React.useContext(StateContext).filter
    let filtered = {}
    let groupings = []

    //THIS SHOULD BE DONE IN THE PROVIDER WHEN SETTING STATE?
    
    state.searchResults?.forEach((track) => {
      filtered.hasOwnProperty(track[filter]) ? filtered[track[filter]].push(track) : filtered[track[filter]] = [track]
    })

    Object.keys(filtered).forEach((el, key) => {
      groupings.push(<FilterDropdown key = {key} title = {el} tracks = {filtered[el]}/>)
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
  