import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTask(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {setQuery,setActiveTask,setError,setResults,setLoading}=searchSlice.actions

export default searchSlice.reducer