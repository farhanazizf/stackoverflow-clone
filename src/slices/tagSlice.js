import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { dummyResTags } from "./dummy";

export const fetchTags = createAsyncThunk(
  "tags/fetchTags",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.stackexchange.com/2.3/tags",
        {
          params: {
            order: "desc",
            sort: "popular",
            site: "stackoverflow",
          },
        }
      );

      dispatch(selectTag(response.data.items[0].name));
      return response.data.items;
      // return dummyResTags.items;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchTags = createAsyncThunk("tags/searchTags", async (query) => {
  const params = {
    order: "desc",
    sort: "popular",
    inname: query,
    site: "stackoverflow",
  };
  const response = await axios.get(`https://api.stackexchange.com/2.3/tags`, {
    params,
  });

  return response.data.items;
  // return dummyResTags.items;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [],
    selectedTag: "",
    loading: false,
    error: null,
  },
  reducers: {
    selectTag: (state, action) => {
      state.selectedTag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
        state.loading = false;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(searchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
      });
  },
});

export const { selectTag } = tagsSlice.actions;
export default tagsSlice.reducer;
