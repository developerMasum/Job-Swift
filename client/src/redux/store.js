import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "./jobSlice";
import postReducer from "./postJob/postSlice";




 const store = configureStore({
    reducer: {
        counter: jobReducer,
       posts: postReducer,
       
        
    }
 })
 export default store; 