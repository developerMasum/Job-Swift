import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "./jobSlice";
import postReducer from "./postJob/postSlice";
import applicationsReducer from "./application/applicationsSlice";
import candidatesReducer from "./candidates/candidatesSlice";
import stageReducer from "./stage/stageSlice";
import feedbacksReducer from "./feedback/feedbacksSlice";

const store = configureStore({
  reducer: {
    counter: jobReducer,
    posts: postReducer,
    application: applicationsReducer,
    candidates: candidatesReducer,
    stage: stageReducer,
    feedbacks: feedbacksReducer,
  },
});
export default store;
