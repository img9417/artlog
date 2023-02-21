import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const artSlice = createSlice({
    name: 'art',
    initialState: {
        arts: [],
        name: '',
        date: '',
        note: '',
        location: '',
        cupless: {},
        base64img: '',
        _id: ''
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name + '.png';
            state.date = action.payload.date;
            state.note = action.payload.note;
            state.location = action.payload.location;
            state.cupless = action.payload.cupless;
            state.base64img = action.payload.base64img;
            state._id = action.payload._id;
        },
        storeBase64Image: (state, action) => {
            state.base64img = action.payload.base64img;
        },
        saveListOfArts: (state, action) => {
            state.arts = action.payload.arts;
        },
    }
})

export const { update, storeBase64Image, saveListOfArts } = artSlice.actions;

export default artSlice.reducer;