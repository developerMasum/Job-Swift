import { configureStore } from "@reduxjs/toolkit";

import jobSlice from "./jobSlice";


 const store = configureStore({
    reducer: {
        counter: jobSlice,
    }
 })
 export default store;