import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
    name: 'audio',
    initialState:[],
    reducers:{
        addAudioFile : (state,action) => {
            state.push({
                id: action.payload.audioId,
                name: action.payload.name,
                type: action.payload.type,
                data: action.payload.data,
              });
        },
        removeAudioFile : (state,action) => {
            const audioIdToRemove = action.payload.audioId;
            const indexToRemove = state.findIndex(audio => audio.audioId === audioIdToRemove);
            if (indexToRemove !== -1) {
                state.splice(indexToRemove, 1);
            }
        }
    },
})

export const {addAudioFile,removeAudioFile} = audioSlice.actions;
export const selectAudioFiles = (state) => state.audio;
export default audioSlice.reducer;
