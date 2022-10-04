import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const StateContext = createContext(undefined);
const StateDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function StateProvider({ children }) {
  const [trackDetails, setTrackDetails] = useState({
    searchResults: [
        {
          artist: "me",
          track: "that",
          album: "al",
          length: 98
        },
        {
          artist: "me2",
          track: "that2",
          album: "alme2",
          length: 76
        },
        {
            artist: "me2",
            track: "that4",
            album: "alme2",
            length: 88
          },
          {
            artist: "me2",
            track: "that3",
            album: "alme2",
            length: 45
          },
          {
            artist: "me",
            track: "that",
            album: "alme5",
            length: 100
          },
          {
            artist: "me",
            track: "thjat",
            album: "alme5",
            length: 66
          },
          {
            artist: "me1",
            track: "thaht",
            album: "alme5",
            length: 100
          },
          {
            artist: "me1",
            track: "thhat",
            album: "alme6",
            length: 87
          },
          {
            artist: "me8",
            track: "thagt",
            album: "alme7",
            length: 100
          },
          {
            artist: "me8",
            track: "th7at",
            album: "alme7",
            length: 65
          },
          {
            artist: "me8",
            track: "thatf",
            album: "alme8",
            length: 76
          },
          {
            artist: "me9",
            track: "thatd",
            album: "alme8",
            length: 65
          }
      ]
  });
  const [playbackStatus, setPlaybackStatus] = useState({
    track: null,
    length: 100,
    time: 89,
    playing: false
  })
  const [filter, setFilter] = useState({
    filter: "none"
  })

  return (
    <StateContext.Provider value={{...trackDetails, playbackStatus, filter}}>
      <StateDispatchContext.Provider value={{setTrackDetails, setPlaybackStatus, setFilter}}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}

export { StateProvider, StateContext, StateDispatchContext};