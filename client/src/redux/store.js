import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "./jobSlice";
import postReducer from "./postJob/postSlice";
import applicationsReducer from "./application/applicationsSlice";
import candidatesReducer from "./candidates/candidatesSlice";



const store = configureStore({
    reducer: {
        counter: jobReducer,
       posts: postReducer,
       application:applicationsReducer,
       candidates:candidatesReducer
       
        
    }
 })
export default store; 
