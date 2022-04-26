import { createSlice } from "@reduxjs/toolkit";

export const ShelfSlice = createSlice({
    name: "Shelf",
    initialState: {
        0:{
            "Id":           0,
            "Name":         "V1 Mechanical Keyboard",
            "Description":  "This is one of Kevin's Custom Keyboards, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "100.00",
            "Image":        "https://www.wasdkeyboards.com/pub/media/wysiwyg/hp/banner/fp1.jpg" 
        },
        1:{
            "Id":           1,
            "Name":         "V2 Mechanical Keyboard",
            "Description":  "This is one of Kevin's Custom Keyboards, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "110.00",
            "Image":        "https://www.wasdkeyboards.com/pub/media/wysiwyg/hp/banner/fp1.jpg" 
        },
        2:{
            "Id":           2,
            "Name":         "V3 Mechanical Keyboard",
            "Description":  "This is one of Kevin's Custom Keyboards, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "120.00",
            "Image":        "https://www.wasdkeyboards.com/pub/media/wysiwyg/hp/banner/fp1.jpg" 
        },
        3:{
            "Id":           3,
            "Name":         "V4 Mechanical Keyboard",
            "Description":  "This is one of Kevin's Custom Keyboards, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "130.00",
            "Image":        "https://www.wasdkeyboards.com/pub/media/wysiwyg/hp/banner/fp1.jpg" 
        },
        4:{
            "Id":           4,
            "Name":         "V5 Mechanical Keyboard",
            "Description":  "This is one of Kevin's Custom Keyboards, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "140.00",
            "Image":        "https://www.wasdkeyboards.com/pub/media/wysiwyg/hp/banner/fp1.jpg" 
        },
        5:{
            "Id":           5,
            "Name":         "V6 Mechanical Keyboard",
            "Description":  "This is one of Kevin's Custom Keyboards, it comes with cherry MX brown keyswitches, custom black key-caps with no inscriptions ",
            "Price":        "150.00",
            "Image":        "https://www.wasdkeyboards.com/pub/media/wysiwyg/hp/banner/fp1.jpg" 
        },
    },
    reducers: {
        add: state =>{},
        remove: state =>{},
        edit: state =>{}

    }
})

export const { add, remove, edit } = ShelfSlice.actions

export default ShelfSlice.reducer