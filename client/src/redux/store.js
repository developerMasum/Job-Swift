import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "./jobSlice";
import postReducer from "./postJob/postSlice";
import applicationsReducer from "./application/applicationsSlice";




 const store = configureStore({
    reducer: {
        counter: jobReducer,
       posts: postReducer,
       application:applicationsReducer
       
        
    }
 })
 export default store; 