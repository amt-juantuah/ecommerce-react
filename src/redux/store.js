import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedx";
import userReducer from "./authRedx";



export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    }
})