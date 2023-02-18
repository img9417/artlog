import { createSlice } from "@reduxjs/toolkit";

export const artSlice = createSlice({
    name: 'art',
    initialState: {
        name: '',
        note: ''
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.date + '.png';
            state.note = action.payload.note;
        },
    }
})

export const { update } = artSlice.actions;

export default artSlice.reducer;