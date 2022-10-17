import React, { createContext, useState } from "react";
import { getDummyTracks } from "../utils/musixmatch.utils";

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
          artist: "Foo Fighters",
          track: "My Hero",
          album: "al",
          length: 98
        }
      ]
  });
  const [playbackStatus, setPlaybackStatus] = useState({
    track: {
      artist: "foo fighters",
      track: "All My Life",
      album: "One By One",
      length: 3.15
    },
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