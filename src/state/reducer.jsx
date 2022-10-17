const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state
        case "PLAYBACKSTATUS":
            state.current.playing = !state.current.playing
            return {
                ...state
        };
        case "SETFILTER":
            let filtered = {}
            state.searchResults.forEach((track) => {
                filtered.hasOwnProperty(track[action.payload]) ? filtered[track[action.payload]].push(track) : filtered[track[action.payload]] = [track]
              })
            return { ...state, filter: action.payload, filtered: filtered };
        case "SETTRACK":
            return {...state, track: action.payload}
        case "SETFILES":
            return {...state, searchResults: action.payload}
    }
  };

  export default reducer
