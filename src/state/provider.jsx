import React, { createContext, useState, useReducer } from "react";
import reducer from "./reducer";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
export const AppContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function StateProvider({ children }) {
  const initialState = {
    searchResults: [
        {
          artist: "Foo Fighters",
          track: "My Hero",
          album: "al",
          length: 98
        },
        {
          artist: "Foo Fighters",
          track: "Monkey Wrench",
          album: "al",
          length: 66
        }
    ],
    track: {
      artist: "foo fighters",
      track: "All My Life",
      album: "One By One",
      length: 3.15
    },
    current: {
      length: 100,
      time: 89,
      playing: false
    },
    filter: "artist",
    filtered:{}
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
  );
}

export default StateProvider;