import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No diggity", duration: "4:05" },
    { title: "No Scrubs", duration: "3:15" },
    { title: "Gangstas paradise", duration: "3:52" },
    { title: "Guess whos back", duration: "3:08" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
        case "SONG_SELECTED":
            return action.payload;
        default:
            return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})