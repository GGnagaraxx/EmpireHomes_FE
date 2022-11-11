import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const sampleSlice = createSlice({
    name: 'sample',
    initialState: 0,
    reducers: {
        reducer1: () => {

        }
    }
})

export const { increment } = sampleSlice.actions;
export default sampleSlice.reducer;