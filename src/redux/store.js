import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedx";



export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})