import { Tag } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface NewsFiltersState {
  queryString: string;
  categories: Tag[];
  sources: Tag[];
  authors: Tag[];
  startDate: string;
  endDate: string;
}

const initialState: NewsFiltersState = {
  queryString: "",
  categories: [],
  sources: [],
  authors: [],
  startDate: "",
  endDate: "",
};

const filtersSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
    setCategories: (state, action: PayloadAction<Tag[]>) => {
      state.categories = action.payload;
    },
    setSources: (state, action: PayloadAction<Tag[]>) => {
      state.sources = action.payload;
    },
    setAuthors: (state, action: PayloadAction<Tag[]>) => {
      state.authors = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    resetFilters: (state) => {
      state.queryString = "";
      state.categories = [];
      state.sources = [];
      state.authors = [];
      state.startDate = "";
      state.endDate = "";
    }
  },
});


export const {
  setQueryString,
  setCategories,
  setSources,
  setAuthors,
  setStartDate,
  setEndDate,
  resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
