import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { dummyResQuestion } from "./dummy";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (tag, { dispatch, getState }) => {
    const { page } = getState().questions;
    const limit = 20;
    const order = "desc";
    const sort = "activity";
    const site = "stackoverflow";

    const url = `https://api.stackexchange.com/2.3/questions`;
    const response = await axios.get(url, {
      params: { pagesize: limit, order, sort, site, page, tagged: tag },
    });

    // return dummyResQuestion;
    return response.data;
  }
);

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    loading: false,
    error: null,
    hasMore: true,
    page: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetQuestions: (state) => {
      state.questions = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = [...state.questions, ...action.payload.items];
        state.hasMore = action.payload.has_more;
        state.page += 1;
        state.loading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default questionsSlice.reducer;
