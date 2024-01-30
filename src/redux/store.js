import { configureStore } from "@reduxjs/toolkit";
import jewelryReducer from "./slices/JewelrySlice";

const store = configureStore({
    reducer: {
        jewelryData: jewelryReducer
    }
})

export default store;