import { createSlice } from "@reduxjs/toolkit";

export const ShelfSlice = createSlice({
    name: "Shelf",
    initialState: {
        0:{
            "Id":           0,
            "Name":         "Kevin's Keyboard",
            "Description":  "This is Kevin's Original Keyboard, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "100.00",
            "Image":        "https://www.wasdkeyboards.com/pub/media/wysiwyg/hp/banner/fp1.jpg" 
        }
    },
    reducers: {
        add: state =>{},
        remove: state =>{},
        edit: state =>{}

    }
})

export const { add, remove, edit } = ShelfSlice.actions

export default ShelfSlice.reducer