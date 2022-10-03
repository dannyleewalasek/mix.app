import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const StateContext = createContext(undefined);
const StateDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function StateProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "John Doe",
    track: {artist: "me"},
    searchResults: [
        {
          artist: "me",
          track: "that",
          length: 100
        },
        {
          artist: "me",
          track: "that",
          length: 100
        },
        {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          },
          {
            artist: "me",
            track: "that",
            length: 100
          }
      ]
  });

  return (
    <StateContext.Provider value={userDetails}>
      <StateDispatchContext.Provider value={setUserDetails}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}

export { StateProvider, StateContext, StateDispatchContext};