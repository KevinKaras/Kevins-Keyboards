import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/Cart/Cart.js"
import ShelfReducer from "../features/Shelves/Shelf.js"

export default configureStore({
    reducer: {
        Cart: CartReducer,
        Shelf: ShelfReducer
    }
})