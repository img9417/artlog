import { createSlice } from "@reduxjs/toolkit";

export const artSlice = createSlice({
    name: 'art',
    initialState: {
        name: '',
        note: '',
        cupless: undefined,
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name + '.png';
            state.note = action.payload.note;
            state.cupless = action.payload.cupless;
        },
    }
})

export const { update } = artSlice.actions;

export default artSlice.reducer;