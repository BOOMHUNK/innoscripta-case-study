import { AvailableClients } from "@/configs";
import { Tag } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface PreferencesState {
  clients: (keyof typeof AvailableClients)[]; // Store usable clients' names for serializability
  categories: Tag[];
  sources: Tag[];
  authors: Tag[];
}

const initialState: PreferencesState = {
  clients: Object.keys(AvailableClients), // Initialize with all clients
  categories: [],
  sources: [],
  authors: [],
};

const preferencesSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addClient: (state, action: PayloadAction<string>) => {
      if (!state.clients.includes(action.payload)) {
        state.clients.push(action.payload); //  Store as array, yet ensuring uniqueness
      }
    },
    removeClient: (state, action: PayloadAction<string>) => {
      state.clients = state.clients.filter((client) => client !== action.payload);
    },

    setPreferedCategories: (state, action: PayloadAction<Tag[]>) => {
      state.categories = action.payload;
    },
    setPreferedSources: (state, action: PayloadAction<Tag[]>) => {
      state.sources = action.payload;
    },
    setPreferedAuthors: (state, action: PayloadAction<Tag[]>) => {
      state.authors = action.payload;
    },

    resetPreferences: (state) => {
      state.clients = Object.keys(AvailableClients);
      state.categories = [];
      state.sources = [];
      state.authors = [];
    }
  },
});


export const {
  addClient,
  removeClient,

  setPreferedCategories,
  setPreferedSources,
  setPreferedAuthors,


  resetPreferences,
} = preferencesSlice.actions;
export default preferencesSlice.reducer;
