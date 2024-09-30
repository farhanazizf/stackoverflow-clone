import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./slices/tagSlice";
import questionsReducer from "./slices/questionSlice";

const store = configureStore({
  reducer: {
    tags: tagsReducer,
    questions: questionsReducer,
  },
});

export default store;
