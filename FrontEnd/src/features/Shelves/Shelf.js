import { createSlice } from "@reduxjs/toolkit";

export const ShelfSlice = createSlice({
    name: "Shelf",
    initialState: [
        {
            "Id":           0,
            "Name":         "Kevin's Keyboard",
            "Description":  "This is Kevin's Original Keyboard, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "100.00",
            "Image":        "https://customkeyboard.net/wp-content/uploads/2019/10/FC660C-Black-e1572087289431.jpg.webp" 
        }
    ],
    reducers: {
        add: state =>{},
        remove: state =>{},
        edit: state =>{}

    }
})

export const { add, remove, edit } = ShelfSlice.actions

export default ShelfSlice.reducer