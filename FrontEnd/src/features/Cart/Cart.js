import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "Cart",
    initialState: {},
    reducers: {
        add: state => {},
        remove: state => {},
        edit: state => {}
    }

})

export const { add, remove, edit } = CartSlice.actions

export default CartSlice.reducer