import { configureStore } from '@reduxjs/toolkit';
import artReducer from './_reducers/artSlice';

const store =  configureStore({
    reducer: {
        art: artReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof store.getState>

export default store