import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./slices/sampleSlice";
// import { sampleApi } from "./apiSlices/sampleApiSlice";


const store = configureStore({
    reducer: {
        sample: sampleReducer,
        // [sampleApi.path]: sampleApi.reducer
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(sampleApi.middleware)
    // }
})

export default store;