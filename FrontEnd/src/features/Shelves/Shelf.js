import { createSlice } from "@reduxjs/toolkit";

export const ShelfSlice = createSlice({
    name: "Shelf",
    initialState: [],
    reducers: {
        add: state =>{},
        remove: state =>{},
        edit: state =>{}

    }
})

export const { add, remove, edit } = ShelfSlice.actions

export default ShelfSlice.reducer