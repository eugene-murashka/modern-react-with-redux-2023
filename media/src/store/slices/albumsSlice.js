import { createSlice } from "@reduxjs/toolkit";
import { fetchAlbumsByUser } from "../thunks/fetchAlbumsByUser";
import { createAlbum } from "../thunks/createAlbum";

const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    isLoading: false,
    entities: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchAlbumsByUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAlbumsByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    });
    builder.addCase(fetchAlbumsByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(createAlbum.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entities.push(action.payload);
    });
    builder.addCase(createAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const albumsReducer = albumsSlice.reducer;
