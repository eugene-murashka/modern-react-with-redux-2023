import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsReducer,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/createUser";
export * from "./thunks/removeUser";

export * from "./thunks/fetchAlbumsByUser";
export * from "./thunks/createAlbum";
