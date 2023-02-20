import { createSlice } from "@reduxjs/toolkit";

export const artSlice = createSlice({
    name: 'art',
    initialState: {
        name: '',
        note: '',
        cupless: undefined,
        base64img: ''
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name + '.png';
            state.note = action.payload.note;
            state.cupless = action.payload.cupless;
            state.base64img = action.payload.base64img;
        },
        storeBase64Image: (state, action) => {
            state.base64img = action.payload.base64img;
        }
    }
})

export const { update, storeBase64Image } = artSlice.actions;

export default artSlice.reducer;