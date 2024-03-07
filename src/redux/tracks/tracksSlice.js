import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name: 'track',
    initialState: [],
    reducers: {
        createTrack: (state, action) => {
            const { trackId } = action.payload;
            return [...state, { trackId, audioFiles: [] }];
        },
        deleteTrack: (state, action) => {
            const trackIdToDelete = action.payload;
            return state.filter(track => track.trackId !== trackIdToDelete);
        },
        addAudioToTrack: (state, action) => {
            const { trackId, audioListItem } = action.payload;
            const trackIndex = state.findIndex(track => track.trackId === trackId);
      
            if (trackIndex !== -1) {
              const updatedTrack = {
                ...state[trackIndex],
                audioFiles: [...state[trackIndex].audioFiles, { ...audioListItem }],
              };
      
              return [
                ...state.slice(0, trackIndex),
                updatedTrack,
                ...state.slice(trackIndex + 1),
              ];
            }
      
            return state;
          },        
        removeAudioFromTrack: (state, action) => {
            const { trackId, audioId } = action.payload;
            const track = state.find(track => track.trackId === trackId);

            if (track) {
                const indexToRemove = track.audioFiles.findIndex(audio => audio === audioId);

                if (indexToRemove !== -1) {
                    track.audioFiles.splice(indexToRemove, 1);
                }
            }
        },
        selectAudioFilesInsideTracks: (state) => {
            return state.reduce((audioFiles, track) => {
              return audioFiles.concat(track.audioFiles);
            }, []);
          },

        selectTracks: (state) => state,
    },
});

const removeAudioFromTrack = (payload) => ({
    type: 'track/removeAudioFromTrack',
    payload,
});

export const { createTrack, deleteTrack, addAudioToTrack,selectAudioFilesInsideTracks, selectTracks,reorderAudioInTrack } = trackSlice.actions;

export default trackSlice.reducer;
