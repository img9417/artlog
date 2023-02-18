import { configureStore } from '@reduxjs/toolkit';
import artReducer from './_reducers/artSlice';

export default configureStore({
    reducer: {
        art: artReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})