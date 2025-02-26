// store/newsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsFiltersState {
  queryString: string;
  categories: string[];
  sources: string[];
  authors: string[];
  startDate: string;
  endDate: string;
  pageSize: number;
}

const initialState: NewsFiltersState = {
  queryString: "",
  categories: [],
  sources: [],
  authors: [],
  startDate: "",
  endDate: "",
  pageSize: 10,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setSources: (state, action: PayloadAction<string[]>) => {
      state.sources = action.payload;
    },
    setAuthors: (state, action: PayloadAction<string[]>) => {
      state.authors = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    setArticlesPerPage: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
});

export const {
  setQueryString,
  setCategories,
  setSources,
  setAuthors,
  setStartDate,
  setEndDate,
  setArticlesPerPage,
} = newsSlice.actions;
export default newsSlice.reducer;
